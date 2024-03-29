import { GermanPronounKeys, GermanVerbHydrated } from 'german-types';
import { LanguageMap } from 'global-types';

export const blendenReturnObject: GermanVerbHydrated = {
  infinitive: 'blenden',
  language: LanguageMap.de,
  variations: [
    {
      hilfsverb: 'haben',
      partizip: 'geblendet',
      präsens: {
        [GermanPronounKeys.ich]: 'blende',
        [GermanPronounKeys.wir]: 'blenden',
        [GermanPronounKeys.du]: 'blendest',
        [GermanPronounKeys.ihr]: 'blendet',
        [GermanPronounKeys.es]: 'blendet',
      },
      präteritum: {
        [GermanPronounKeys.ich]: 'blendete',
        [GermanPronounKeys.wir]: 'blendeten',
        [GermanPronounKeys.du]: 'blendetest',
        [GermanPronounKeys.ihr]: 'blendetet',
        [GermanPronounKeys.es]: 'blendete',
      },
      konjunktiv: {
        [GermanPronounKeys.ich]: 'blende',
        [GermanPronounKeys.wir]: 'blenden',
        [GermanPronounKeys.du]: 'blendest',
        [GermanPronounKeys.ihr]: 'blendet',
        [GermanPronounKeys.es]: 'blende',
      },
      k2präsens: {
        [GermanPronounKeys.ich]: 'blendete',
        [GermanPronounKeys.wir]: 'blendeten',
        [GermanPronounKeys.du]: 'blendetest',
        [GermanPronounKeys.ihr]: 'blendetet',
        [GermanPronounKeys.es]: 'blendete',
      },
      translations: {
        en: ['blind'],
      },
    },
    {
      hilfsverb: 'haben',
      particle: 'ab',
      partizip: 'abgeblendet',
      präsens: {
        [GermanPronounKeys.ich]: 'blende',
        [GermanPronounKeys.wir]: 'blenden',
        [GermanPronounKeys.du]: 'blendest',
        [GermanPronounKeys.ihr]: 'blendet',
        [GermanPronounKeys.es]: 'blendet',
      },
      präteritum: {
        [GermanPronounKeys.ich]: 'blendete',
        [GermanPronounKeys.wir]: 'blendeten',
        [GermanPronounKeys.du]: 'blendetest',
        [GermanPronounKeys.ihr]: 'blendetet',
        [GermanPronounKeys.es]: 'blendete',
      },
      konjunktiv: {
        [GermanPronounKeys.ich]: 'blende',
        [GermanPronounKeys.wir]: 'blenden',
        [GermanPronounKeys.du]: 'blendest',
        [GermanPronounKeys.ihr]: 'blendet',
        [GermanPronounKeys.es]: 'blende',
      },
      k2präsens: {
        [GermanPronounKeys.ich]: 'blendete',
        [GermanPronounKeys.wir]: 'blendeten',
        [GermanPronounKeys.du]: 'blendetest',
        [GermanPronounKeys.ihr]: 'blendetet',
        [GermanPronounKeys.es]: 'blendete',
      },
      translations: {
        en: ['fade'],
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
      dative: false,
      genitive: false,
      hilfsverb: 'haben',
      impersonal: false,
      partizip: 'geblendet',
      particle: '',
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
      dative: false,
      genitive: false,
      hilfsverb: 'haben',
      impersonal: false,
      partizip: 'abgeblendet',
      particle: 'ab',
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
      dative: false,
      genitive: false,
      hilfsverb: 'haben',
      impersonal: false,
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
