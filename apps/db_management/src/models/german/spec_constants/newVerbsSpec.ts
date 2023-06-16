import { GermanPronounKeys, GermanVerbHydrated } from 'german-types';
import { LanguageMap, LanguageVerbCandidate } from 'global-types';

export const widersprechenGermanVerb: LanguageVerbCandidate = {
  infinitive: 'widersprechen',
  dative: true,
  language: LanguageMap.de,
  partizip: 'widersprochen',
  stems: {
    duEs: 'i',
    präteritum: 'a',
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
      partizip: 'widersprochen',
      präsens: {
        [GermanPronounKeys.ich]: 'widerspreche',
        [GermanPronounKeys.wir]: 'widersprechen',
        [GermanPronounKeys.du]: 'widersprechst',
        [GermanPronounKeys.ihr]: 'widersprecht',
        [GermanPronounKeys.es]: 'widersprecht',
      },
      präteritum: {
        [GermanPronounKeys.ich]: 'widersprach',
        [GermanPronounKeys.wir]: 'widersprachen',
        [GermanPronounKeys.du]: 'widersprachst',
        [GermanPronounKeys.ihr]: 'widerspracht',
        [GermanPronounKeys.es]: 'widersprach',
      },
      konjunktiv: {
        [GermanPronounKeys.ich]: 'widerspreche',
        [GermanPronounKeys.wir]: 'widersprechen',
        [GermanPronounKeys.du]: 'widersprechest',
        [GermanPronounKeys.ihr]: 'widersprechet',
        [GermanPronounKeys.es]: 'widerspreche',
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

export const bedürfenGermanVerb: LanguageVerbCandidate = {
  infinitive: 'bedürfen',
  genitive: true,
  weakEndings: true,
  language: LanguageMap.de,
  translations: {
    en: ['require'],
  },
  stems: {
    präteritum: 'u',
    partizip: 'u',
  },
  irregular: {
    präsens: {
      ich: 'bedarf',
      du: 'bedarfst',
      es: 'bedarf',
    },
  },
};

export const bedürfenReturnObject: GermanVerbHydrated = {
  infinitive: 'bedürfen',
  language: LanguageMap.de,
  variations: [
    {
      genitive: true,
      hilfsverb: 'haben',
      partizip: 'bedurft',
      präsens: {
        [GermanPronounKeys.ich]: 'bedarf',
        [GermanPronounKeys.wir]: 'bedürfen',
        [GermanPronounKeys.du]: 'bedarfst',
        [GermanPronounKeys.ihr]: 'bedürft',
        [GermanPronounKeys.es]: 'bedarf',
      },
      präteritum: {
        [GermanPronounKeys.ich]: 'bedurfte',
        [GermanPronounKeys.wir]: 'bedurften',
        [GermanPronounKeys.du]: 'bedurftest',
        [GermanPronounKeys.ihr]: 'bedurftet',
        [GermanPronounKeys.es]: 'bedurfte',
      },
      konjunktiv: {
        [GermanPronounKeys.ich]: 'bedürfe',
        [GermanPronounKeys.wir]: 'bedürfen',
        [GermanPronounKeys.du]: 'bedürfest',
        [GermanPronounKeys.ihr]: 'bedürfet',
        [GermanPronounKeys.es]: 'bedürfe',
      },
      k2präsens: {
        [GermanPronounKeys.ich]: 'bedürfte',
        [GermanPronounKeys.wir]: 'bedürften',
        [GermanPronounKeys.du]: 'bedürftest',
        [GermanPronounKeys.ihr]: 'bedürftet',
        [GermanPronounKeys.es]: 'bedürfte',
      },
      translations: {
        en: ['require'],
      },
    },
  ],
};

export const gelingenGermanVerb: LanguageVerbCandidate = {
  hilfsverb: 'sein',
  impersonal: true,
  infinitive: 'gelingen',
  dative: true,
  language: LanguageMap.de,
  translations: {
    en: ['succeed (reverse, impersonal)'],
  },
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
      dative: true,
      impersonal: true,
      hilfsverb: 'sein',
      partizip: 'gelungen',
      präsens: {
        [GermanPronounKeys.wir]: 'gelingen',
        [GermanPronounKeys.es]: 'gelingt',
      },
      präteritum: {
        [GermanPronounKeys.wir]: 'gelangen',
        [GermanPronounKeys.es]: 'gelang',
      },
      konjunktiv: {
        [GermanPronounKeys.wir]: 'gelingen',
        [GermanPronounKeys.es]: 'gelinge',
      },
      k2präsens: {
        [GermanPronounKeys.wir]: 'gelängen',
        [GermanPronounKeys.es]: 'gelänge',
      },
      translations: {
        en: ['succeed (reverse, impersonal)'],
      },
    },
  ],
};

export const brennenGermanVerb: LanguageVerbCandidate = {
  infinitive: 'brennen',
  language: LanguageMap.de,
  translations: {
    en: ['burn', 'shine', 'distil'],
  },
  weakEndings: true,
  stems: {
    präteritum: 'a',
    k2präsens: 'e',
    partizip: 'a',
  },
};

export const brennenReturnObject: GermanVerbHydrated = {
  infinitive: 'brennen',
  language: LanguageMap.de,
  variations: [
    {
      hilfsverb: 'haben',
      partizip: 'gebrannt',
      translations: {
        en: ['burn', 'shine', 'distil'],
      },
      k2präsens: {
        '1033': 'brennte',
        '1041': 'brennten',
        '1098': 'brenntest',
        '1106': 'brenntet',
        '1548': 'brennte',
      },
      konjunktiv: {
        '1033': 'brenne',
        '1041': 'brennen',
        '1098': 'brennest',
        '1106': 'brennet',
        '1548': 'brenne',
      },
      präsens: {
        '1033': 'brenne',
        '1041': 'brennen',
        '1098': 'brennst',
        '1106': 'brennt',
        '1548': 'brennt',
      },
      präteritum: {
        '1033': 'brannte',
        '1041': 'brannten',
        '1098': 'branntest',
        '1106': 'branntet',
        '1548': 'brannte',
      },
    },
  ],
};
