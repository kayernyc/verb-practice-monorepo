import {
  GermanPronounKeys,
  GermanTenses,
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
  infinitive: 'sein',
  language: LanguageMap.de,
  variations: [
    {
      hilfsverb: 'sein',
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
    },
  ],
};

export const habenGermanVerb: LanguageVerbCandidate = {
  infinitive: 'haben',
  language: LanguageMap.de,
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
  infinitive: 'haben',
  variations: [
    {
      hilfsverb: 'haben',
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
    },
  ],
};

export const werdenGermanVerb: LanguageVerbCandidate = {
  language: LanguageMap.de,
  hilfsverb: 'sein',
  infinitive: 'werden',
  irregular: {
    [GermanTenses.präsens]: {
      du: 'wirst',
      es: 'wird',
    },
    [GermanTenses.präteritum]: {
      ich: 'wurde',
      es: 'wurde',
    },
  },
  translations: { en: 'to become, to grow' },
  stems: { präteritum: 'u', partizip: 'o' },
  strong: true,
  weakEndings: false,
};

export const werdenReturnObject: GermanVerbHydrated = {
  infinitive: 'werden',
  language: LanguageMap.de,
  variations: [
    {
      hilfsverb: 'sein',
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
      translations: { en: 'to become, to grow' },
    },
  ],
};

export const könnenGermanVerb: LanguageVerbCandidate = {
  infinitive: 'können',
  language: LanguageMap.de,
  translations: {
    en: ['can', 'may', 'are able to', 'to know how'],
  },
  modal: true,
  strong: true,
  weakEndings: true,
  stems: {
    präsensSingular: 'a',
    präteritum: 'o',
  },
  drop: true,
};

export const könnenReturnObject: GermanVerbHydrated = {
  language: LanguageMap.de,
  infinitive: 'können',
  variations: [
    {
      hilfsverb: 'haben',
      partizip: 'gekonnt',
      präsens: {
        [GermanPronounKeys.ich]: 'kann',
        [GermanPronounKeys.wir]: 'können',
        [GermanPronounKeys.du]: 'kannst',
        [GermanPronounKeys.ihr]: 'könnt',
        [GermanPronounKeys.es]: 'kann',
      },
      präteritum: {
        [GermanPronounKeys.ich]: 'konnte',
        [GermanPronounKeys.wir]: 'konnten',
        [GermanPronounKeys.du]: 'konntest',
        [GermanPronounKeys.ihr]: 'konntet',
        [GermanPronounKeys.es]: 'konnte',
      },
      konjunktiv: {
        [GermanPronounKeys.ich]: 'könne',
        [GermanPronounKeys.wir]: 'können',
        [GermanPronounKeys.du]: 'könnest',
        [GermanPronounKeys.ihr]: 'könnet',
        [GermanPronounKeys.es]: 'könne',
      },
      k2präsens: {
        [GermanPronounKeys.ich]: 'könnte',
        [GermanPronounKeys.wir]: 'könnten',
        [GermanPronounKeys.du]: 'könntest',
        [GermanPronounKeys.ihr]: 'könntet',
        [GermanPronounKeys.es]: 'könnte',
      },
      translations: {
        en: ['can', 'may', 'are able to', 'to know how'],
      },
    },
  ],
};

export const gelingenGermanVerb: LanguageVerbCandidate = {
  infinitive: 'gelingen',
  language: LanguageMap.de,
  translations: {
    en: ['succeed'],
  },
  hilfsverb: 'sein',
  stems: {
    präteritum: 'a',
    partizip: 'u',
  },
};

export const gelingenReturnObject: GermanVerbHydrated = {
  infinitive: 'gelingen',
  language: LanguageMap.de,
  variations: [
    {
      hilfsverb: 'sein',
      partizip: 'gelungen',
      präsens: {
        [GermanPronounKeys.ich]: 'gelinge',
        [GermanPronounKeys.wir]: 'gelingen',
        [GermanPronounKeys.du]: 'gelingst',
        [GermanPronounKeys.ihr]: 'gelingt',
        [GermanPronounKeys.es]: 'gelingt',
      },
      präteritum: {
        [GermanPronounKeys.ich]: 'gelang',
        [GermanPronounKeys.wir]: 'gelangen',
        [GermanPronounKeys.du]: 'gelangst',
        [GermanPronounKeys.ihr]: 'gelangt',
        [GermanPronounKeys.es]: 'gelang',
      },
      konjunktiv: {
        [GermanPronounKeys.ich]: 'gelinge',
        [GermanPronounKeys.wir]: 'gelingen',
        [GermanPronounKeys.du]: 'gelingest',
        [GermanPronounKeys.ihr]: 'gelinget',
        [GermanPronounKeys.es]: 'gelinge',
      },
      k2präsens: {
        [GermanPronounKeys.ich]: 'gelänge',
        [GermanPronounKeys.wir]: 'gelängen',
        [GermanPronounKeys.du]: 'gelängest',
        [GermanPronounKeys.ihr]: 'gelänget',
        [GermanPronounKeys.es]: 'gelänge',
      },
      translations: {
        en: ['succeed'],
      },
    },
  ],
};

export const gehenGermanVerb: LanguageVerbCandidate = {
  infinitive: 'gehen',
  language: LanguageMap.de,
  translations: {
    en: ['go'],
  },
  hilfsverb: 'sein',
  stems: {
    präteritum: 'ing',
    k2präsens: 'ing',
    partizip: 'ang',
  },
};

export const gehenReturnObject: GermanVerbHydrated = {
  infinitive: 'gehen',
  language: LanguageMap.de,
  variations: [
    {
      hilfsverb: 'sein',
      partizip: 'gegangen',
      präsens: {
        [GermanPronounKeys.ich]: 'gehe',
        [GermanPronounKeys.wir]: 'gehen',
        [GermanPronounKeys.du]: 'gehst',
        [GermanPronounKeys.ihr]: 'geht',
        [GermanPronounKeys.es]: 'geht',
      },
      präteritum: {
        [GermanPronounKeys.ich]: 'ging',
        [GermanPronounKeys.wir]: 'gingen',
        [GermanPronounKeys.du]: 'gingst',
        [GermanPronounKeys.ihr]: 'gingt',
        [GermanPronounKeys.es]: 'ging',
      },
      konjunktiv: {
        [GermanPronounKeys.ich]: 'gehe',
        [GermanPronounKeys.wir]: 'gehen',
        [GermanPronounKeys.du]: 'gehest',
        [GermanPronounKeys.ihr]: 'gehet',
        [GermanPronounKeys.es]: 'gehe',
      },
      k2präsens: {
        [GermanPronounKeys.ich]: 'ginge',
        [GermanPronounKeys.wir]: 'gingen',
        [GermanPronounKeys.du]: 'gingest',
        [GermanPronounKeys.ihr]: 'ginget',
        [GermanPronounKeys.es]: 'ginge',
      },
      translations: {
        en: ['go'],
      },
    },
  ],
};

export const fliegenGermanVerb: LanguageVerbCandidate = {
  infinitive: 'fliegen',
  language: LanguageMap.de,
  translations: {
    en: ['fly'],
  },
  hilfsverb: 'sein',
  stems: {
    präteritum: 'o',
    partizip: 'o',
  },
};

export const fliegenReturnObject: GermanVerbHydrated = {
  infinitive: 'fliegen',
  language: LanguageMap.de,
  variations: [
    {
      hilfsverb: 'sein',
      partizip: 'geflogen',
      präsens: {
        [GermanPronounKeys.ich]: 'fliege',
        [GermanPronounKeys.wir]: 'fliegen',
        [GermanPronounKeys.du]: 'fliegst',
        [GermanPronounKeys.ihr]: 'fliegt',
        [GermanPronounKeys.es]: 'fliegt',
      },
      präteritum: {
        [GermanPronounKeys.ich]: 'flog',
        [GermanPronounKeys.wir]: 'flogen',
        [GermanPronounKeys.du]: 'flogst',
        [GermanPronounKeys.ihr]: 'flogt',
        [GermanPronounKeys.es]: 'flog',
      },
      konjunktiv: {
        [GermanPronounKeys.ich]: 'fliege',
        [GermanPronounKeys.wir]: 'fliegen',
        [GermanPronounKeys.du]: 'fliegest',
        [GermanPronounKeys.ihr]: 'flieget',
        [GermanPronounKeys.es]: 'fliege',
      },
      k2präsens: {
        [GermanPronounKeys.ich]: 'flöge',
        [GermanPronounKeys.wir]: 'flögen',
        [GermanPronounKeys.du]: 'flögest',
        [GermanPronounKeys.ihr]: 'flöget',
        [GermanPronounKeys.es]: 'flöge',
      },
      translations: {
        en: ['fly'],
      },
    },
  ],
};

export const bleibenGermanVerb: LanguageVerbCandidate = {
  infinitive: 'bleiben',
  language: LanguageMap.de,
  translations: {
    en: ['remain', 'stay'],
  },
  hilfsverb: 'sein',
  stems: {
    präteritum: 'ie',
    k2präsens: 'ie',
    partizip: 'ie',
  },
};

export const bleibenReturnObject: GermanVerbHydrated = {
  infinitive: 'bleiben',
  language: LanguageMap.de,
  variations: [
    {
      hilfsverb: 'sein',
      partizip: 'geblieben',
      präsens: {
        [GermanPronounKeys.ich]: 'bleibe',
        [GermanPronounKeys.wir]: 'bleiben',
        [GermanPronounKeys.du]: 'bleibst',
        [GermanPronounKeys.ihr]: 'bleibt',
        [GermanPronounKeys.es]: 'bleibt',
      },
      präteritum: {
        [GermanPronounKeys.ich]: 'blieb',
        [GermanPronounKeys.wir]: 'blieben',
        [GermanPronounKeys.du]: 'bliebst',
        [GermanPronounKeys.ihr]: 'bliebt',
        [GermanPronounKeys.es]: 'blieb',
      },
      konjunktiv: {
        [GermanPronounKeys.ich]: 'bleibe',
        [GermanPronounKeys.wir]: 'bleiben',
        [GermanPronounKeys.du]: 'bleibest',
        [GermanPronounKeys.ihr]: 'bleibet',
        [GermanPronounKeys.es]: 'bleibe',
      },
      k2präsens: {
        [GermanPronounKeys.ich]: 'bliebe',
        [GermanPronounKeys.wir]: 'blieben',
        [GermanPronounKeys.du]: 'bliebest',
        [GermanPronounKeys.ihr]: 'bliebet',
        [GermanPronounKeys.es]: 'bliebe',
      },
      translations: {
        en: ['remain', 'stay'],
      },
    },
  ],
};

export const drehenGermanVerb: LanguageVerbCandidate = {
  infinitive: 'drehen',
  language: LanguageMap.de,
  translations: {
    en: ['spin'],
  },
  hilfsverb: 'haben',
};

export const drehenReturnObject: GermanVerbHydrated = {
  infinitive: 'drehen',
  language: LanguageMap.de,
  variations: [
    {
      hilfsverb: 'haben',
      partizip: 'gedreht',
      präsens: {
        [GermanPronounKeys.ich]: 'drehe',
        [GermanPronounKeys.wir]: 'drehen',
        [GermanPronounKeys.du]: 'drehst',
        [GermanPronounKeys.ihr]: 'dreht',
        [GermanPronounKeys.es]: 'dreht',
      },
      präteritum: {
        [GermanPronounKeys.ich]: 'drehte',
        [GermanPronounKeys.wir]: 'drehten',
        [GermanPronounKeys.du]: 'drehtest',
        [GermanPronounKeys.ihr]: 'drehtet',
        [GermanPronounKeys.es]: 'drehte',
      },
      konjunktiv: {
        [GermanPronounKeys.ich]: 'drehe',
        [GermanPronounKeys.wir]: 'drehen',
        [GermanPronounKeys.du]: 'drehest',
        [GermanPronounKeys.ihr]: 'drehet',
        [GermanPronounKeys.es]: 'drehe',
      },
      k2präsens: {
        [GermanPronounKeys.ich]: 'drehte',
        [GermanPronounKeys.wir]: 'drehten',
        [GermanPronounKeys.du]: 'drehtest',
        [GermanPronounKeys.ihr]: 'drehtet',
        [GermanPronounKeys.es]: 'drehte',
      },
      translations: {
        en: ['spin'],
      },
    },
  ],
};
