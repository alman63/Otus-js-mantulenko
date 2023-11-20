const fs = require('fs');

(async () => {
    const readStream = fs.createReadStream(__dirname + '/data/input.txt', {
        encoding: 'utf8',
    });

    let data = '';

    // Через async/await
    for await (const chunk of readStream) {
        data += chunk;
    }

    console.log(data);
})();
