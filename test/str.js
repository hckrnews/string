import { Str } from '../src/helpers';

const string = new Str('example');

describe('Instance', () => {
    it('Test if the original output from Str is a instance of Str', () => {
        expect(string instanceof Str).toBeTruthy();
    });

    it('Test if the original output from Str is a instance of String', () => {
        expect(string instanceof String).toBeTruthy();
    });

    it('Test the original result', () => {
        expect(string.toString()).toEqual('example');
    });
});
