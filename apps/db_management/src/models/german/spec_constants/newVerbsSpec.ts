import { GermanPronounKeys, GermanVerbHydrated } from 'german-types';
import { LanguageMap, LanguageVerbCandidate } from 'global-types';

export const widersprechenGermanVerb: LanguageVerbCandidate = {
  infinitive: 'widersprechen',
  dative: true,
  language: LanguageMap.de,
  stems: {
    duEs: 'i',
    k2präsens: 'a',
  },
  translations: {
    en: ['contradict'],
  },
};

export const widersprechenReturnObject: GermanVerbHydrated = {
  infinitive: 'widersprechen',
  language: LanguageMap.de,
  variations: [
    {
      dative: true,
      hilfsverb: 'haben',
      partizip: 'gewidersprochen',
      präsens: {
        [GermanPronounKeys.ich]: 'widerspreche',
        [GermanPronounKeys.wir]: 'widersprechen',
        [GermanPronounKeys.du]: 'widersprechst',
        [GermanPronounKeys.ihr]: 'widersprecht',
        [GermanPronounKeys.es]: 'widersprecht',
      },
      präteritum: {
        [GermanPronounKeys.ich]: 'widersprach',
        [GermanPronounKeys.wir]: 'widersprachn',
        [GermanPronounKeys.du]: 'widersprachst',
        [GermanPronounKeys.ihr]: 'widerspracht',
        [GermanPronounKeys.es]: 'widersprach',
      },
      konjunktiv: {
        [GermanPronounKeys.ich]: 'widersprech',
        [GermanPronounKeys.wir]: 'widersprechen',
        [GermanPronounKeys.du]: 'widersprechst',
        [GermanPronounKeys.ihr]: 'widersprecht',
        [GermanPronounKeys.es]: 'widersprech',
      },
      k2präsens: {
        [GermanPronounKeys.ich]: 'widerspräche',
        [GermanPronounKeys.wir]: 'widersprächen',
        [GermanPronounKeys.du]: 'widersprächest',
        [GermanPronounKeys.ihr]: 'widersprächet',
        [GermanPronounKeys.es]: 'widerspräche',
      },
      translations: {
        en: ['contradict'],
      },
    },
  ],
};

export const ähnelnGermanVerb: LanguageVerbCandidate = {
  infinitive: 'ähneln',
  dative: true,
  language: LanguageMap.de,
  translations: {
    en: ['resemble'],
  },
};

export const ähnelnReturnObject: GermanVerbHydrated = {
  infinitive: 'ähneln',
  language: LanguageMap.de,
  variations: [
    {
      dative: true,
      hilfsverb: 'haben',
      partizip: 'geähnelt',
      präsens: {
        [GermanPronounKeys.ich]: 'ähnele',
        [GermanPronounKeys.wir]: 'ähneln',
        [GermanPronounKeys.du]: 'ähnelst',
        [GermanPronounKeys.ihr]: 'ähnelt',
        [GermanPronounKeys.es]: 'ähnelt',
      },
      präteritum: {
        [GermanPronounKeys.ich]: 'ähnelte',
        [GermanPronounKeys.wir]: 'ähnelten',
        [GermanPronounKeys.du]: 'ähneltest',
        [GermanPronounKeys.ihr]: 'ähneltet',
        [GermanPronounKeys.es]: 'ähnelte',
      },
      konjunktiv: {
        [GermanPronounKeys.ich]: 'ähnele',
        [GermanPronounKeys.wir]: 'ähneln',
        [GermanPronounKeys.du]: 'ähnelest',
        [GermanPronounKeys.ihr]: 'ähnelet',
        [GermanPronounKeys.es]: 'ähnele',
      },
      k2präsens: {
        [GermanPronounKeys.ich]: 'ähnelte',
        [GermanPronounKeys.wir]: 'ähnelten',
        [GermanPronounKeys.du]: 'ähneltest',
        [GermanPronounKeys.ihr]: 'ähneltet',
        [GermanPronounKeys.es]: 'ähnelte',
      },
      translations: {
        en: ['resemble'],
      },
    },
  ],
};
