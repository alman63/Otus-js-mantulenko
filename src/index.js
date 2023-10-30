const { program } = require('commander');
const fs = require('fs').promises;
const { renderTree } = require('./render');
const { isDirectoryItems } = require('./isDirectory');

program.option('--path <string>').option('--d <number>');
program.parse();

const options = program.opts();
const path = options.path ? options.path : '.';
const depth = options.d ? Number(options.d) : 0;

async function Tree(
    path,
    depth,
    obj = {},
    step = 0,
    countDir = 0,
    countFile = 0
) {
    if (depth && depth == step) {
        return [obj, countDir, countFile];
    } else {
        const files = await fs.readdir(path);
        step++;
        let resultObj = obj;
        for (const file of files) {
            const isDir = await isDirectoryItems(`./${path}/${file}`);
            if (isDir) {
                countDir++;
                let dir = await Tree(
                    `${path}/${file}`,
                    depth,
                    resultObj[`${file}`],
                    step,
                    countDir,
                    countFile
                );
                resultObj[`${file}`] = { ...dir[0] };
                countDir = dir[1];
                countFile = dir[2];
            } else {
                countFile++;
                resultObj[`${file}`] = `${file}`;
            }
        }

        return [resultObj, countDir, countFile];
    }
}

Tree(path, depth).then((obj) => {
    renderTree(obj[0]);
    console.log(obj[1], 'directories,', obj[2], 'files');
});

module.export = {
    Tree,
};
