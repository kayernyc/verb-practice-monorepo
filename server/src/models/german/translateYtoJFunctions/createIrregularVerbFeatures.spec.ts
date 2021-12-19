import { GermanVerb, GermanTenses, GermanPronounKeys } from '@german/germanTypes';
import { DataObj } from '../germanVerbs';

import createIrregularVerbFeatures from './createIrregularVerbFeatures';

describe('verbIsIrregular correctly determines the state of the verb', () => {
  it('populates sein correctly', () => {
    const newVerb: GermanVerb = {
      drop: false,
      hilfsverb: 'sein',
      infinitive: 'sein',
      languages: { en: 'to be' },
    };

    const seinObj: DataObj = {
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

    const expected: GermanVerb = {
      drop: false,
      hilfsverb: 'sein',
      infinitive: 'sein',
      languages: { en: 'to be' },
      partizip: 'gewesen',
      strong: true,
      stems: { präteritum: 'war' },
      irregular: {
        [GermanTenses.präsens]: {
          [GermanPronounKeys.ich]: 'bin',
          [GermanPronounKeys.du]: 'bist',
          [GermanPronounKeys.es]: 'ist',
          [GermanPronounKeys.wir]: 'sind',
          [GermanPronounKeys.ihr]: 'seid',
        },
      }
      ,
    };

    const result = createIrregularVerbFeatures({ newVerb, dataObj: seinObj });
    expect(result).toEqual(expected);
  });

  it('populates können correctly', () => {
    const english = 'can, may, are able to, to know how';

    const newVerb: GermanVerb = {
      drop: true,
      hilfsverb: 'haben',
      infinitive: 'können',
      languages: { en: english },
    };

    const könnenObj: DataObj = {
      en: english,
      tags: ['modal'],
      'weak endings': true,
      strong: true,
      stems: { 'präsens singular': 'a', präteritum: 'o' },
      'drop ich/es präsens endings': true,
    };

    const expected: GermanVerb = {
      drop: true,
      hilfsverb: 'haben',
      infinitive: 'können',
      languages: { en: english },
      strong: true,
      stems: { präsensSingular: 'a', präteritum: 'o' },
      weakEndings: true,
    };

    const result = createIrregularVerbFeatures({ newVerb, dataObj: könnenObj });
    expect(result).toEqual(expected);
  });


  it('populates sollen correctly', () => {
    const english = 'to be expected to';

    const newVerb: GermanVerb = {
      drop: true,
      hilfsverb: 'haben',
      infinitive: 'sollen',
      languages: { en: english },
    };

    const sollenObj: DataObj = {
      en: english,
      tags: ['modal'],
      strong: true,
      'drop ich/es präsens endings': true,
    };

    const expected: GermanVerb = {
      drop: true,
      hilfsverb: 'haben',
      infinitive: 'sollen',
      languages: { en: english },
      strong: true,
    };

    const result = createIrregularVerbFeatures({ newVerb, dataObj: sollenObj });
    expect(result).toEqual(expected);
  });
});

// eslint-disable-next-line max-len
// node node_modules/jest/bin/jest.js -i src/models/german/translateYtoJFunctions/createIrregularVerbFeatures.spec.ts -t "verbIsIrregular correctly determines the state of the verb"
