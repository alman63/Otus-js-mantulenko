import { deepEqual } from "./index";
const obj1 = { a: { c: { f: 7 } }, m: { b: { k: 6 } }, z: { x: { y: 6 } } };
const obj2 = { m: { b: { k: 6 } }, a: { c: { f: 7 } }, z: { x: { y: 6 } } };
const obj3 = {
    a: function a() {},
    m: { b: [0, 2, 4] },
};
const obj4 = { a: function a() {}, m: { b: [0, 2, 4] } };

console.log(deepEqual(obj3, obj4, ''));
// тестирование 
describe("tree", () => {
  it("obj = {}", () => {
    const obj={}
    expect(tree(obj)).toBe('');
  });
});

describe("tree", () => {
  it("obj = {name: 1}", () => {
    const obj2={name:1}
    expect(tree(obj2)).toMatch('| └─1');
  });
});


