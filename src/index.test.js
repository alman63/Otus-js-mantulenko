import { getPath } from './index';

// тестирование

describe('getPath', () => {
    it('is a function', () => {
        expect(typeof getPath).toBe('function');
    });
    it('HTMLElement = null|undefined  return Error', () => {
        const element = null;
        expect(getPath(element)).toBe(Error);
    });
    it('HTMLElement = ul  <body><div><ul></div></body>  return BODY > DIV > UL', () => {
        document.body.innerHTML = '<div><ul></ul></div>';
        const element = document.querySelector('ul');
        expect(getPath(element)).toBe('BODY > DIV > UL');
    });
    it('HTMLElement = ul and class  <body><div  class=test ><ul></div></body>  return BODY > DIV.test > UL', () => {
        document.body.innerHTML = '<div class=test ><ul></ul></div>';
        const element = document.querySelector('ul');
        expect(getPath(element)).toBe('BODY > DIV.test > UL');
    });
    it('HTMLElement = li:nth-child(2) and <body><div  class=test ><ul><li>1</li><li>2</li></ul></div></body>  return BODY > DIV.test > UL > li:nth-child(2)', () => {
        document.body.innerHTML =
            '<div  class=test ><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></div>';
        const element = document.querySelectorAll('li')[3];
        expect(getPath(element)).toBe('BODY > DIV.test > UL > LI:nth-child(4)');
    });
    it('querySelectorAll(elem).length  =  1', () => {
        document.body.innerHTML =
            '<div  class=test ><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></div>';
        const element = document.querySelectorAll('li')[3];
        expect(document.querySelectorAll(getPath(element)).length).toBe(1);
    });
    it('querySelectorAll(elem).length  =  1', () => {
        document.body.innerHTML = `<div  class=test ><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></div>
            <div  class=test2 ><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></div>`;
        const element = document.querySelector(
            'div.test > ul > li:nth-child(3)'
        );
        expect(getPath(element)).toBe(
            'BODY > DIV.test:nth-child(1) > UL > LI:nth-child(3)'
        );
    });
});
