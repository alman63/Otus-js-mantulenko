import { deepEqual } from "./index";

// тестирование 
describe("deepEqual", () => {
  it("obj1 = {}, obj2 = {},", () => {
    const obj1={};
    const obj2={};
    expect(deepEqual(obj1,obj2)).toEqual({ flag: true });
  });
  it("obj1 , obj2 ", () => {
    const obj1 = { a: { c: { f: 7 } }, m: { b: { k: 6 } }, z: { x: { y: 6 } } };
    const obj2 = { m: { b: { k: 6 } }, a: { c: { f: 7 } }, z: { x: { y: 6 } } };
    expect(deepEqual(obj1,obj2)).toEqual({ flag: true });
  });
  it("obj1 , obj2 ", () => {
    const obj1 = { a: { c: { f: 8 } }, m: { b: { k: 6 } }, z: { x: { y: 6 } } };
    const obj2 = { m: { b: { k: 6 } }, a: { c: { f: 7 } }, z: { x: { y: 6 } } };
    expect(deepEqual(obj1,obj2)).toEqual({ flag: false, Error: 'a.c.f' });
  });
  it("obj1 , obj2 ", () => {
    const obj1 = { a: { c: { f: 7 } }, m: { b: { k: 6 } }, z: { x: { y: 6 } } };
    const obj2 = { m: { b: { k: 6 } }, a: { c: { f: 7 } }, z: { x: { y: 0 } } };
    expect(deepEqual(obj1,obj2)).toEqual({ flag: false, Error: 'z.x.y' });
  });
  it("obj1 , obj2 ", () => {
    const obj1 = { a: [1,2,3] };
    const obj2 = { a: [1,2,3]  };
    expect(deepEqual(obj1,obj2)).toEqual({ flag: true });
  });
  it("obj1 , obj2 ", () => {
    const obj1 = { a: [1,2,3] };
    const obj2 = { a: [1,4,3]  };
    expect(deepEqual(obj1,obj2)).toEqual({ flag: false, Error: 'a.1' });
  });
  it("obj1 , obj2 ", () => {
    const obj1 = {
      a: function a() {},
      m: { b: [0, 2, 4] },
    };
    const obj2 = { 
      a: function a() {}, 
      m: { b: [0, 2, 4] } 
    };
    expect(deepEqual(obj1,obj2)).toEqual({ flag: true });
  });
});




