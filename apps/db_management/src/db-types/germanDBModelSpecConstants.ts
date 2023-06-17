import { blendenReturnObject } from '@models/german/spec_constants/specConstants';
import { LanguageMap } from 'global-types';

export const scheißen = {
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

export const abblenden = { ...blendenReturnObject };
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

export const expected = {
  date: new Date('2022-01-01'),
  infinitive: 'blenden',
  schema_version: 1,
  variations: [
    {
      hilfsverb: 'haben',
      partizip: 'geblendet',
      particle: undefined,
      tenses: [
        {
          tenseName: 'präsens',
          conjugations: [
            {
              person: '1033',
              conjugation: 'blende',
            },
            {
              person: '1041',
              conjugation: 'blenden',
            },
            {
              person: '1098',
              conjugation: 'blendest',
            },
            {
              person: '1106',
              conjugation: 'blendet',
            },
            {
              person: '1548',
              conjugation: 'blendet',
            },
          ],
        },
        {
          tenseName: 'präteritum',
          conjugations: [
            {
              person: '1033',
              conjugation: 'blendete',
            },
            {
              person: '1041',
              conjugation: 'blendeten',
            },
            {
              person: '1098',
              conjugation: 'blendetest',
            },
            {
              person: '1106',
              conjugation: 'blendetet',
            },
            {
              person: '1548',
              conjugation: 'blendete',
            },
          ],
        },
        {
          tenseName: 'konjunktiv',
          conjugations: [
            {
              person: '1033',
              conjugation: 'blende',
            },
            {
              person: '1041',
              conjugation: 'blenden',
            },
            {
              person: '1098',
              conjugation: 'blendest',
            },
            {
              person: '1106',
              conjugation: 'blendet',
            },
            {
              person: '1548',
              conjugation: 'blende',
            },
          ],
        },
        {
          tenseName: 'k2präsens',
          conjugations: [
            {
              person: '1033',
              conjugation: 'blendete',
            },
            {
              person: '1041',
              conjugation: 'blendeten',
            },
            {
              person: '1098',
              conjugation: 'blendetest',
            },
            {
              person: '1106',
              conjugation: 'blendetet',
            },
            {
              person: '1548',
              conjugation: 'blendete',
            },
          ],
        },
      ],
      translations: {
        en: ['blind'],
      },
    },
    {
      hilfsverb: 'haben',
      partizip: 'abgeblendet',
      particle: undefined,
      tenses: [
        {
          tenseName: 'präsens',
          conjugations: [
            {
              person: '1033',
              conjugation: 'blende',
            },
            {
              person: '1041',
              conjugation: 'blenden',
            },
            {
              person: '1098',
              conjugation: 'blendest',
            },
            {
              person: '1106',
              conjugation: 'blendet',
            },
            {
              person: '1548',
              conjugation: 'blendet',
            },
          ],
        },
        {
          tenseName: 'präteritum',
          conjugations: [
            {
              person: '1033',
              conjugation: 'blendete',
            },
            {
              person: '1041',
              conjugation: 'blendeten',
            },
            {
              person: '1098',
              conjugation: 'blendetest',
            },
            {
              person: '1106',
              conjugation: 'blendetet',
            },
            {
              person: '1548',
              conjugation: 'blendete',
            },
          ],
        },
        {
          tenseName: 'konjunktiv',
          conjugations: [
            {
              person: '1033',
              conjugation: 'blende',
            },
            {
              person: '1041',
              conjugation: 'blenden',
            },
            {
              person: '1098',
              conjugation: 'blendest',
            },
            {
              person: '1106',
              conjugation: 'blendet',
            },
            {
              person: '1548',
              conjugation: 'blende',
            },
          ],
        },
        {
          tenseName: 'k2präsens',
          conjugations: [
            {
              person: '1033',
              conjugation: 'blendete',
            },
            {
              person: '1041',
              conjugation: 'blendeten',
            },
            {
              person: '1098',
              conjugation: 'blendetest',
            },
            {
              person: '1106',
              conjugation: 'blendetet',
            },
            {
              person: '1548',
              conjugation: 'blendete',
            },
          ],
        },
      ],
      translations: {
        en: ['fade'],
      },
    },
    {
      hilfsverb: 'haben',
      particle: 'ab',
      partizip: 'geblendet',
      tenses: [
        {
          tenseName: 'präsens',
          conjugations: [
            {
              person: '1033',
              conjugation: 'blende',
            },
            {
              person: '1041',
              conjugation: 'blenden',
            },
            {
              person: '1098',
              conjugation: 'blendest',
            },
            {
              person: '1106',
              conjugation: 'blendet',
            },
            {
              person: '1548',
              conjugation: 'blendet',
            },
          ],
        },
        {
          tenseName: 'präteritum',
          conjugations: [
            {
              person: '1033',
              conjugation: 'blendete',
            },
            {
              person: '1041',
              conjugation: 'blendeten',
            },
            {
              person: '1098',
              conjugation: 'blendetest',
            },
            {
              person: '1106',
              conjugation: 'blendetet',
            },
            {
              person: '1548',
              conjugation: 'blendete',
            },
          ],
        },
        {
          tenseName: 'konjunktiv',
          conjugations: [
            {
              person: '1033',
              conjugation: 'blende',
            },
            {
              person: '1041',
              conjugation: 'blenden',
            },
            {
              person: '1098',
              conjugation: 'blendest',
            },
            {
              person: '1106',
              conjugation: 'blendet',
            },
            {
              person: '1548',
              conjugation: 'blende',
            },
          ],
        },
        {
          tenseName: 'k2präsens',
          conjugations: [
            {
              person: '1033',
              conjugation: 'blendete',
            },
            {
              person: '1041',
              conjugation: 'blendeten',
            },
            {
              person: '1098',
              conjugation: 'blendetest',
            },
            {
              person: '1106',
              conjugation: 'blendetet',
            },
            {
              person: '1548',
              conjugation: 'blendete',
            },
          ],
        },
      ],
      translations: {
        en: ['fade out'],
      },
    },
  ],
};
