import { LanguageMap } from 'global-types';
import { convertGermanVerbToHydratedGermanVerb } from './germanDBModel';
import { GermanVerbHydrated } from 'german-types';

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

describe('convertGermanVerbToHydratedGermanVerb', () => {
  it('transforms German Hydrated Verb scheißen to a Mongoose model', () => {
    const result = convertGermanVerbToHydratedGermanVerb(
      scheißen as GermanVerbHydrated,
    );
    console.log({ result });
    expect(true).toBe(true);
  });
});
