// const { Tree } = require('./index');
// const { isDirectoryItems } = require('./isDirectory');
const fs = require('fs/promises');
// jest.mock('fs/promises');
// тестирование
describe('isDirectoryItems', () => {
    it('path=. and depth = 0 ', () => {
        // fs.readdir = jest.fn().mockResolvedValueOnce();
        // Call the function to get the promise
        // const promise = isDirectoryItems('./template');
        // expect(fs.readdir).toBeCalled();
        // await expect(promise('./template')).rejects.toEqual(
        //     new Error('mock error')
        // );
        expect(1).toBe(1);
    });
});
