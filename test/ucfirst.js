import { Str } from '../src/helpers';

const testCases = [
    {
        description: 'Should return the string where the first character is uppercase.',
        input: 'pieter',
        expectedResult: 'Pieter',
    },
    {
        description: 'Test an number',
        input: 1,
        expectedResult: '1',
    },
];

describe.each(testCases)(
    'Ucfirst test',
    ({ description, input, expectedResult }) => {
        it(description, () => {
            expect(new Str(input).ucfirst).toEqual(expectedResult);
        });
    }
);