
  export function tree(obj) {
    let resStr = "";
    const count = 0;
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
    getProp(obj, count);
    console.log(resStr);
    return resStr;
  }
  
  
  

