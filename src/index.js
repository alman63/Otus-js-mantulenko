const fs = require('fs');
const { Transform } = require('stream');

(async () => {
    const readStream = fs.createReadStream(__dirname + '/data/input.txt', {
        encoding: 'utf8',
    });
    const writeStream = fs.createWriteStream(__dirname + '/data/output.txt', {
        encoding: 'utf8',
    });

    const filterTransform = new Transform({
        transform(chunk, encoding, callback) {
            callback(
                null,
                JSON.stringify(
                    chunk
                        .toString()
                        .replace(/[^a-z ]/g, '')
                        .replace(/\s{2}/g, ' ')
                        .split(' ')
                        .filter((el) => el !== '')
                        .sort((a, b) => {
                            if (a.toLowerCase() < b.toLowerCase()) {
                                return -1;
                            }
                            if (a.toLowerCase() > b.toLowerCase()) {
                                return 1;
                            }
                            return 0;
                        })
                )
            );
        },
    });

    const getObjTransform = new Transform({
        objectMode: true,
        transform(chunk, encoding, callback) {
            const chunkObj = {};
            const getObj = (chunk) => {
                const chunkArr = JSON.parse(chunk);
                for (const item of chunkArr) {
                    if (chunkObj.hasOwnProperty(item)) {
                        chunkObj[`${item}`] += 1;
                    } else {
                        chunkObj[`${item}`] = 1;
                    }
                }
                return chunkObj;
            };
            this.push(getObj(chunk));
            callback();
        },
    });
    const getResulArrTransform = new Transform({
        objectMode: true,
        transform(object, encoding, callback) {
            const getArr = (object) => {
                const chunkResultArr = [];
                const chunkObj = object;
                for (const prop in chunkObj) {
                    chunkResultArr.push(chunkObj[`${prop}`]);
                }
                return JSON.stringify(chunkResultArr);
            };
            callback(null, getArr(object));
        },
    });

    readStream
        .pipe(filterTransform)
        .pipe(getObjTransform)
        .pipe(getResulArrTransform)
        .pipe(writeStream);
})();
