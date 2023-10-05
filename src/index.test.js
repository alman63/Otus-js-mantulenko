import { tree } from "./index";

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


