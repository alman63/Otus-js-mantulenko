
  export function tree(obj) {
    let resStr = "";
    let count = 0;
    getProp(obj, count);
    function getProp(o, count) {
      count++;
      for (let prop in o) {
        if (typeof o[prop] === "object") {
          getProp(o[prop], count);
        } else {
          resStr += `|${" ".repeat(count)}` + "└─" + o[prop] + `\n`;
        }
      }
    }
  
    console.log(resStr);
    return resStr;
  }
  
  
  

