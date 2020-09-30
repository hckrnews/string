import { Str } from '../src/helpers';

const testCases = [
    {
        description: 'Should return the string where the first character is uppercase.',
        input: 'pieter wigboldus',
        expectedResult: 'Pieter Wigboldus',
    },
    {
        description: 'Test an number',
        input: 1,
        expectedResult: '1',
    },
];

describe.each(testCases)(
    'Ucwords test',
    ({ description, input, expectedResult }) => {
        it(description, () => {
            expect(new Str(input).ucwords).toEqual(expectedResult);
        });
    }
);