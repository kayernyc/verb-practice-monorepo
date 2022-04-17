/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import GermanAddPronounStringsToJson from '../GermanAddPronounStringsToJson';

describe('GermanAddPronounStringsToJson', () => {
  it('replaces code:sting pairs with objects', () => {
    const simpleTest = {
      partizip: 'test',
      präsens: {
        1033: 'bin',
      },
    };

    const result = GermanAddPronounStringsToJson(simpleTest);

    const expected = {
      partizip: 'test',
      präsens: {
        1033: {
          subjectPronoun: 'ich',
          verbConjugation: 'bin',
        },
      },
    };

    expect(result).toEqual(expected);
  });
});
