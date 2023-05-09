import {
  GermanPronounKeys,
  GermanTenses,
  GermanVerb,
  GermanVerbHydrated,
} from 'german-types';
import { LanguageMap, LanguageVerbCandidate } from 'global-types';

export const seinGermanVerb: LanguageVerbCandidate = {
  auxiliary: true,
  language: LanguageMap.de,
  hilfsverb: 'sein',
  infinitive: 'sein',
  irregular: {
    [GermanTenses.präsens]: {
      ich: 'bin',
      wir: 'sind',
      du: 'bist',
      ihr: 'seid',
      es: 'ist',
    },
  },
  translations: { en: 'to be' },
  partizip: 'gewesen',
  stems: { präteritum: 'war', konjunktiv: 'sei' },
  strong: true,
  weakEndings: false,
};

export const seinReturnObject: GermanVerbHydrated = {
  language: LanguageMap.de,
  hilfsverb: 'sein',
  infinitive: 'sein',
  partizip: 'gewesen',
  präsens: {
    [GermanPronounKeys.ich]: 'bin',
    [GermanPronounKeys.wir]: 'sind',
    [GermanPronounKeys.du]: 'bist',
    [GermanPronounKeys.ihr]: 'seid',
    [GermanPronounKeys.es]: 'ist',
  },
  präteritum: {
    [GermanPronounKeys.ich]: 'war',
    [GermanPronounKeys.wir]: 'waren',
    [GermanPronounKeys.du]: 'warst',
    [GermanPronounKeys.ihr]: 'wart',
    [GermanPronounKeys.es]: 'war',
  },
  konjunktiv: {
    [GermanPronounKeys.ich]: 'sei',
    [GermanPronounKeys.wir]: 'seien',
    [GermanPronounKeys.du]: 'seist',
    [GermanPronounKeys.ihr]: 'seiet',
    [GermanPronounKeys.es]: 'sei',
  },
  k2präsens: {
    [GermanPronounKeys.ich]: 'wäre',
    [GermanPronounKeys.wir]: 'wären',
    [GermanPronounKeys.du]: 'wärest',
    [GermanPronounKeys.ihr]: 'wäret',
    [GermanPronounKeys.es]: 'wäre',
  },
  translations: {
    en: 'to be',
  },
};

export const habenGermanVerb: LanguageVerbCandidate = {
  language: LanguageMap.de,
  infinitive: 'haben',
  translations: { en: ['have'] },
  stems: {
    duEs: 'ha',
    präteritum: 't',
    partizip: 'b',
  },
  weakEndings: true,
};

export const habenReturnObject: GermanVerbHydrated = {
  language: LanguageMap.de,
  hilfsverb: 'haben',
  infinitive: 'haben',
  partizip: 'gehabt',
  präsens: {
    [GermanPronounKeys.ich]: 'habe',
    [GermanPronounKeys.wir]: 'haben',
    [GermanPronounKeys.du]: 'hast',
    [GermanPronounKeys.ihr]: 'habt',
    [GermanPronounKeys.es]: 'hat',
  },
  präteritum: {
    [GermanPronounKeys.ich]: 'hatte',
    [GermanPronounKeys.wir]: 'hatten',
    [GermanPronounKeys.du]: 'hattest',
    [GermanPronounKeys.ihr]: 'hattet',
    [GermanPronounKeys.es]: 'hatte',
  },
  konjunktiv: {
    [GermanPronounKeys.ich]: 'habe',
    [GermanPronounKeys.wir]: 'haben',
    [GermanPronounKeys.du]: 'habest',
    [GermanPronounKeys.ihr]: 'habet',
    [GermanPronounKeys.es]: 'habe',
  },
  k2präsens: {
    [GermanPronounKeys.ich]: 'hätte',
    [GermanPronounKeys.wir]: 'hätten',
    [GermanPronounKeys.du]: 'hättest',
    [GermanPronounKeys.ihr]: 'hättet',
    [GermanPronounKeys.es]: 'hätte',
  },
  translations: {
    en: ['have'],
  },
};

export const habenPräteritumExpected = {
  [GermanPronounKeys.ich]: 'hatte',
  [GermanPronounKeys.wir]: 'hatten',
  [GermanPronounKeys.du]: 'hattest',
  [GermanPronounKeys.ihr]: 'hattet',
  [GermanPronounKeys.es]: 'hatte',
};

export const werdenGermanVerb: GermanVerb = {
  language: LanguageMap.de,
  drop: false,
  hilfsverb: 'sein',
  infinitive: 'werden',
  irregular: {
    [GermanTenses.präsens]: {
      [GermanPronounKeys.du]: 'wirst',
      [GermanPronounKeys.es]: 'wird',
    },
    [GermanTenses.präteritum]: {
      [GermanPronounKeys.ich]: 'wurde',
      [GermanPronounKeys.es]: 'wurde',
    },
  },
  translations: { en: 'to become, to grow' },
  stems: { präteritum: 'u', partizip: 'o' },
  strong: true,
  weakEndings: false,
};

export const werdenReturnObject = {
  language: 'de',
  hilfsverb: 'sein',
  infinitive: 'werden',
  partizip: 'geworden',
  präsens: {
    [GermanPronounKeys.ich]: 'werde',
    [GermanPronounKeys.wir]: 'werden',
    [GermanPronounKeys.du]: 'wirst',
    [GermanPronounKeys.ihr]: 'werdet',
    [GermanPronounKeys.es]: 'wird',
  },
  präteritum: {
    [GermanPronounKeys.ich]: 'wurde',
    [GermanPronounKeys.wir]: 'wurden',
    [GermanPronounKeys.du]: 'wurdest',
    [GermanPronounKeys.ihr]: 'wurdet',
    [GermanPronounKeys.es]: 'wurde',
  },
  konjunktiv: {
    [GermanPronounKeys.ich]: 'werde',
    [GermanPronounKeys.wir]: 'werden',
    [GermanPronounKeys.du]: 'werdest',
    [GermanPronounKeys.ihr]: 'werdet',
    [GermanPronounKeys.es]: 'werde',
  },
  k2präsens: {
    [GermanPronounKeys.ich]: 'würde',
    [GermanPronounKeys.wir]: 'würden',
    [GermanPronounKeys.du]: 'würdest',
    [GermanPronounKeys.ihr]: 'würdet',
    [GermanPronounKeys.es]: 'würde',
  },
};

export const werdenPräteritumExpected = {
  [GermanPronounKeys.ich]: 'wurde',
  [GermanPronounKeys.wir]: 'wurden',
  [GermanPronounKeys.du]: 'wurdest',
  [GermanPronounKeys.ihr]: 'wurdet',
  [GermanPronounKeys.es]: 'wurde',
};
