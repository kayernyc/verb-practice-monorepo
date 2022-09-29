/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import germanAddPronounStringsToJson from '../GermanAddPronounStringsToJson';

describe('germanAddPronounStringsToJson', () => {
  it('replaces code:sting pairs with objects', () => {
    const simpleTest = {
      hilfsverb: 'haben',
      infinitive: 'testen',
      partizip: 'test',
      präsens: {
        1033: 'bin',
      },
    };

    const result = germanAddPronounStringsToJson(simpleTest);

    const expected = {
      hilfsverb: 'haben',
      infinitive: 'testen',
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
