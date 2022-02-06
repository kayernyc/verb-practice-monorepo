import createIrregularObject from './createIrregularObject';
import { DataObj } from '../germanVerbs';

describe('createIrregularObject correctly modifies the object', () => {
  it('does not modify sollen because it does not have irregular', () => {
    const sollen: DataObj = {
      en: 'to be expected to',
      tags: ['modal'],
      'drop ich/es präsens endings': true,
    };
    const result = createIrregularObject({ ...sollen });
    expect(result).toEqual({});
  });

  it('does modify sein because it does have irregular', () => {
    const sein: DataObj = {
      en: 'to be',
      tags: ['hilfsverb'],
      hilfsverb: 'sein',
      partizip: 'gewesen',
      strong: true,
      stems: { präteritum: 'war' },
      irregular: {
        präsens: {
          ich: 'bin',
          du: 'bist',
          es: 'ist',
          wir: 'sind',
          ihr: 'seid',
        },
      },
    };

    const expected = {
      präsens: {
        1033: 'bin',
        1041: 'sind',
        1098: 'bist',
        1106: 'seid',
        1548: 'ist',
      },
    };

    const result = createIrregularObject({ ...sein });

    expect(result).toEqual(expected);
  });
});

// eslint-disable-next-line max-len
// node node_modules/jest/bin/jest.js -i src/models/german/translateYtoJFunctions/createIrregularObject.spec.ts -t "createIrregularObject correctly modifies the object"
