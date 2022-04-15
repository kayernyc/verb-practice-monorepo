/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import GermanAddPronounStringsToJson from '../GermanAddPronounStringsToJson';

const testJson = {
  partizip: 'gewesen',
  präsens: {
    1033: 'bin', 1041: 'sind', 1098: 'bist', 1106: 'seid', 1548: 'ist',
  },
  konjunktiv: {
    1033: 'see', 1041: 'seen', 1098: 'seest', 1106: 'seet', 1548: 'see',
  },
  präteritum: {
    1033: 'war', 1041: 'waren', 1098: 'warst', 1106: 'wart', 1548: 'war',
  },
  k2präsens: {
    1033: 'wäre', 1041: 'wären', 1098: 'wärest', 1106: 'wäret', 1548: 'wäre',
  },
};

describe('GermanAddPronounStringsToJson', () => {
  it('replaces code:sting pairs with objects', () => {
    const simpleTest = {
      präsens: {
        1033: 'bin',
      },
    };

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const result = GermanAddPronounStringsToJson(simpleTest);

    const expected = {
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
