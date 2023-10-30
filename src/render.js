const renderTree = (obj) => {
    if (obj == 'undefined') console.log('gbgtw');
    let resStr = '';
    const count = 0;
    function getProp(object, step) {
        step++;
        for (const prop in object) {
            if (typeof object[prop] === 'object') {
                resStr += `|${'  '.repeat(step)}` + '└─' + prop + `\n`;
                getProp(object[prop], step);
            } else {
                resStr += `|${'  '.repeat(step)}` + '└─' + object[prop] + `\n`;
            }
        }
    }
    getProp(obj, count);
    console.log(resStr);
    return resStr;
};
module.exports = {
    renderTree,
};
