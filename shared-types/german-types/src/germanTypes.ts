import { SeperableGermanParticles } from './germanConstants';
import {
  GrammaticalFormal,
  GrammaticalGender,
  GrammaticalNumber,
  GrammaticalPerson,
  LanguageMap,
  LanguageVerbBase,
} from 'global-types';

const ALL_GERMAN_KEY_PRONOUNS = ['ich', 'du', 'es', 'wir', 'ihr'];
export type GermanKeyPronoun = typeof ALL_GERMAN_KEY_PRONOUNS[number];

const isGermanKeyPronoun = (value: string): value is GermanKeyPronoun => {
  return ALL_GERMAN_KEY_PRONOUNS.includes(value as GermanKeyPronoun);
};

const ALL_GERMAN_VALID_KEYS = [
  'auxiliary',
  'dative',
  'drop',
  'hilfsverb',
  'genitive',
  'impersonal',
  'infinitive',
  'irregular',
  'language',
  'modal',
  'partizip',
  'reflexive',
  'seperable',
  'sich',
  'stems',
  'strong',
  'translations',
  'weakEndings',
  'variations',
];

export type GermanValidKey = typeof ALL_GERMAN_VALID_KEYS[number];

const isGermanValidKey = (value: string): value is GermanValidKey => {
  return ALL_GERMAN_VALID_KEYS.includes(value as GermanValidKey);
};

export const GERMAN_IRREGULAR_KEYS = [
  'auxiliary',
  'drop',
  'irregular',
  'stems',
  'strong',
  'weakEndings',
  'sich',
] as const;

export enum GermanTenses {
  präsens = 'präsens', // present
  präteritum = 'präteritum', // past
  futur = 'futur', // compound and futre
  perfekt = 'perfekt', // compound
  konjunktiv = 'konjunktiv',
  k2präsens = 'k2präsens', // subjunctive and imperitive
  k2präteritum = 'k2präteritum',
}

export type GermanIrregularSet = Record<GermanPronounCode, string>;
export type GermanIrregularObject = {
  // [key in GermanIrregularKeys]?: GermanIrregularSet;
  [GermanTenses.präsens]: Record<GermanPronounCode, string>;
  [GermanTenses.präteritum]: Record<GermanPronounCode, string>;
};

const ALL_GERMAN_STEMS = [
  'duEs',
  'k2präsens',
  'konjunktiv',
  'partizip',
  'präsensSingular',
  'präteritum',
  'reflexive',
] as const;
export type GermanStem = typeof ALL_GERMAN_STEMS[number];

export type TranslationSet = {
  [key in LanguageMap]?: string[] | string;
};

export type GermanVerbVariation = {
  [key in GermanTenses]?: { [key in GermanPronounCode]: string };
} & {
  auxiliary?: boolean;
  dative?: boolean;
  definition?: string;
  genitive?: boolean;
  hilfsverb: string;
  impersonal?: boolean;
  partizip: string;
  particle?: string;
  translations: TranslationSet;
};

export type GermanVerbHydrated = {
  language: LanguageMap.de;
  infinitive: string;
  variations: GermanVerbVariation[];
};

// tslint:disable: no-bitwise
export enum GermanCase {
  Nominative = 1 << 10, // 1024
  Accusative = 1 << 11, // 2048
  Dative = 1 << 12, // 4096
  Genative = 1 << 13, // 8192
}
// tslint:enable: no-bitwise

export type GermanPronoun = {
  grammaticalPerson: GrammaticalPerson;
  grammaticalNumber: GrammaticalNumber;
  grammaticalFormal: GrammaticalFormal;
  case: GermanCase;
};

export enum GermanPronounCode {
  'ich' = GrammaticalPerson.First.valueOf() +
    GrammaticalNumber.Singular.valueOf() +
    GermanCase.Nominative.valueOf(),
  'du' = GrammaticalPerson.Second.valueOf() +
    GrammaticalNumber.Singular.valueOf() +
    GrammaticalFormal.Informal.valueOf() +
    GermanCase.Nominative.valueOf(),
  'es' = GrammaticalPerson.Third.valueOf() +
    GrammaticalNumber.Singular.valueOf() +
    GermanCase.Nominative.valueOf() +
    GrammaticalGender.Neuter.valueOf(),
  'wir' = GrammaticalPerson.First.valueOf() +
    GrammaticalNumber.Plural.valueOf() +
    GermanCase.Nominative.valueOf(),
  'ihr' = GrammaticalPerson.Second.valueOf() +
    GrammaticalNumber.Plural.valueOf() +
    GrammaticalFormal.Informal.valueOf() +
    GermanCase.Nominative.valueOf(),
}

export const GermanPronounKeys: { [key in GermanKeyPronoun]: number } = {
  // 1033
  ich:
    GrammaticalPerson.First.valueOf() +
    GrammaticalNumber.Singular.valueOf() +
    GermanCase.Nominative.valueOf(),
  // 1098
  du:
    GrammaticalPerson.Second.valueOf() +
    GrammaticalNumber.Singular.valueOf() +
    GrammaticalFormal.Informal.valueOf() +
    GermanCase.Nominative.valueOf(),
  // 1548
  es:
    GrammaticalPerson.Third.valueOf() +
    GrammaticalNumber.Singular.valueOf() +
    GermanCase.Nominative.valueOf() +
    GrammaticalGender.Neuter.valueOf(),
  // 1041
  wir:
    GrammaticalPerson.First.valueOf() +
    GrammaticalNumber.Plural.valueOf() +
    GermanCase.Nominative.valueOf(),
  // 1106
  ihr:
    GrammaticalPerson.Second.valueOf() +
    GrammaticalNumber.Plural.valueOf() +
    GrammaticalFormal.Informal.valueOf() +
    GermanCase.Nominative.valueOf(),
} as const;

export type GermanIrregular = {
  präteritum: {
    [key in GermanKeyPronoun]?: string;
  };
  partizip: {
    [key in GermanKeyPronoun]?: string;
  };
};

export interface GermanVerb extends LanguageVerbBase {
  dative?: boolean;
  genitive?: boolean;
  drop: boolean;
  hilfsverb: string;
  impersonal: boolean;
  infinitive: string;
  irregular?: GermanIrregularObject;
  partizip?: string;
  particle?: string;
  seperable?: boolean;
  stems?: { [key in GermanStem]?: string };
  strong?: boolean;
  translations: TranslationSet;
  variations?: Array<Partial<GermanVerb> | { definition: string }>;
  weakEndings?: boolean;
}

export const isGermanVerb = (x: object): x is GermanVerb => {
  let isValid = true;

  if ('language' in x && x.language !== 'de') {
    return false;
  }

  const xKeys = Object.keys(x);
  xKeys.forEach((key: string) => {
    if (!ALL_GERMAN_VALID_KEYS.includes(key)) {
      console.log(`bad key = ${key}`);
      isValid = false;
    }
  });

  if ('irregular' in x) {
    const irregular = x['irregular'];

    if (irregular && typeof irregular === 'object') {
      for (let tenseKey of Object.keys(irregular!)) {
        if (tenseKey === 'präteritum' || tenseKey === 'präsens') {
          const irregularTense: Record<string, unknown> =
            irregular[tenseKey as keyof typeof irregular];
          const tensePronouns = Object.keys(irregularTense);

          tensePronouns.forEach((pronoun: string) => {
            if (
              !isGermanKeyPronoun(pronoun) ||
              typeof irregularTense[pronoun] !== 'string'
            ) {
              isValid = false;
            }
          });
        } else {
          isValid = false;
        }
      }
    }
  }

  if ('stems' in x) {
    if (x['stems'] && typeof x['stems'] === 'object') {
      for (let stem of Object.keys(x['stems'])) {
        if (!ALL_GERMAN_STEMS.includes(stem as GermanStem)) {
          isValid = false;
        }
      }
    }
  }

  return isValid;
};

export interface GermanSeparableVerb extends LanguageVerbBase {
  base: string;
  hilfsverb: string;
  particle: SeperableGermanParticles;
}

const validSeperableKeys = [
  'base',
  'hilfsverb',
  'language',
  'particle',
  'translations',
];

export const isGermanSeparableVerb = (x: object): x is GermanSeparableVerb => {
  let returnValue = true;

  const xKeys = Object.keys(x);
  xKeys.forEach((key: string) => {
    if (!isGermanValidKey(key)) {
      returnValue = false;
    }
  });

  return 'language' in x && returnValue;
};
