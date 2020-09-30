import { Str } from '../src/helpers';

describe('First', () => {
    it('Should return the string where the first character is uppercase.', () => {
        expect(new Str('pieter').ucfirst).toEqual('Pieter');
    });

    it('Test an empty string', () => {
        expect(new Str().ucfirst).toEqual('');
    });
});
