const fs = require('fs').promises;

const isDirectoryItems = async (path) => {
    const stat = await fs.lstat(path);
    return stat.isDirectory();
};

module.exports = {
    isDirectoryItems,
};
