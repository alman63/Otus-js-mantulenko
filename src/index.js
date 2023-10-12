

export function deepEqual(obj1, obj2, err = '') {
    if (obj1 === obj2) {
        return { flag: true };
    }
    if (Array.isArray(obj1) !== Array.isArray(obj2)) {
        resStr = err;
        return { flag: false, Error: resStr };
    }
    for (const prop in obj1) {
        let resStr = err;
        if (!obj2.hasOwnProperty(prop)) {
            resStr += `${prop}.`;
            return { flag: false, Error: resStr };
        }
        switch (typeof obj1[prop]) {
            case 'object':
                resStr += `${prop}.`;
                if (
                  obj1[prop] instanceof Date &&
                  obj2[prop] instanceof Date &&
                  String(obj1[prop]) !== String(obj2[prop])
                )
                  {return {flag:false, Error:resStr}};
                const recursion = deepEqual(obj1[prop], obj2[prop], resStr);
                if (recursion.flag !== 'undefined' && !recursion.flag) {
                    return { flag: false, Error: recursion.Error };
                }
            case 'function':
                resStr += `${prop}.`;
                if (
                    typeof obj2[prop] === 'undefined' ||
                    obj1[prop].toString() !== obj2[prop].toString()
                )
                    return { flag: false, Error: resStr };
                break;
            default:
                if (obj1[prop] !== obj2[prop]) {
                    resStr += `${prop}`;
                    return { flag: false, Error: resStr };
                }
                break;
        }
    }
    return { flag: true };
}


  
  
  

