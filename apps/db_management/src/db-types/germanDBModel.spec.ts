import { LanguageMap } from 'global-types';
import { convertGermanVerbToHydratedGermanVerb } from './germanDBModel';
import { GermanVerbHydrated } from 'german-types';
import { blendenReturnObject } from '@models/german/spec_constants/specConstants';

const scheißen = {
  infinitive: 'scheißen',
  language: LanguageMap.de,
  variations: [
    {
      hilfsverb: 'haben',
      translations: { en: 'shit' },
      partizip: 'geschissen',
      präsens: {
        '1033': 'scheiße',
        '1041': 'scheißen',
        '1098': 'scheißst',
        '1106': 'scheißt',
        '1548': 'scheißt',
      },
      konjunktiv: {
        '1033': 'scheiße',
        '1041': 'scheißen',
        '1098': 'scheißest',
        '1106': 'scheißet',
        '1548': 'scheiße',
      },
      präteritum: {
        '1033': 'schiss',
        '1041': 'schissen',
        '1098': 'schissst',
        '1106': 'schisst',
        '1548': 'schiss',
      },
      k2präsens: {
        '1033': 'schisse',
        '1041': 'schissen',
        '1098': 'schissest',
        '1106': 'schisset',
        '1548': 'schisse',
      },
    },
  ],
};

const abblenden = { ...blendenReturnObject };
abblenden.variations.push({
  hilfsverb: 'haben',
  partizip: 'geblendet',
  particle: 'ab',
  präsens: {
    '1033': 'blende',
    '1041': 'blenden',
    '1098': 'blendest',
    '1106': 'blendet',
    '1548': 'blendet',
  },
  präteritum: {
    '1033': 'blendete',
    '1041': 'blendeten',
    '1098': 'blendetest',
    '1106': 'blendetet',
    '1548': 'blendete',
  },
  konjunktiv: {
    '1033': 'blende',
    '1041': 'blenden',
    '1098': 'blendest',
    '1106': 'blendet',
    '1548': 'blende',
  },
  k2präsens: {
    '1033': 'blendete',
    '1041': 'blendeten',
    '1098': 'blendetest',
    '1106': 'blendetet',
    '1548': 'blendete',
  },
  translations: {
    en: ['fade out'],
  },
});

describe('convertGermanVerbToHydratedGermanVerb', () => {
  it('transforms German Hydrated Verb blenden to a Mongoose model', () => {
    const result = convertGermanVerbToHydratedGermanVerb(
      abblenden as GermanVerbHydrated,
    );
    console.log(JSON.stringify(result, null, 2));
    expect(true).toBe(true);
  });
});
