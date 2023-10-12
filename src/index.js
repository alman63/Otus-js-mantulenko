

export function deepEqual(obj1, obj2, err = '') {
    if (obj1 === obj2) {
        return true;
    }
    for (let prop in obj1) {
        let resStr = err;
        if (!obj2.hasOwnProperty(prop)) {
            resStr += `${prop}.`;
            return { flag: false, Error: resStr };
        }
        switch (typeof obj1[prop]) {
            case 'object':
                resStr += `${prop}.`;
                if (
                  obj1[p] instanceof Date &&
                  obj2[p] instanceof Date &&
                  String(obj1[p]) !== String(obj2[p])
                )
                  return {flag:false, Error:resStr}
                const recursion = deepEqual(obj1[prop], obj2[prop], resStr);
                if (recursion.flag !== 'undefined' && !recursion.flag) {
                    return { flag: false, Error: recursion.Error };
                }
            case 'function':
                resStr += `${prop}.`;
                if (
                    typeof obj2[prop] == 'undefined' ||
                    obj1[prop].toString() != obj2[prop].toString()
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


  
  
  

