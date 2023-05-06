import { SeperableGermanParticles } from './germanConstants';
import {
  GrammaticalFormal,
  GrammaticalGender,
  GrammaticalNumber,
  GrammaticalPerson,
  LanguageVerbBase
} from 'global-types';

const ALL_GERMAN_KEY_PRONOUNS = ['ich', 'du', 'es', 'wir', 'ihr'] as const;
export type GermanKeyPronoun = typeof ALL_GERMAN_KEY_PRONOUNS[number];

const isGermanKeyPronoun = (value: string): value is GermanKeyPronoun => {
  return ALL_GERMAN_KEY_PRONOUNS.includes(value as GermanKeyPronoun);
}

const ALL_GERMAN_VALID_KEYS = [
  'drop',
  'hilfsverb',
  'infinitive',
  'irregular',
  'language',
  'partizip',
  'stems',
  'strong',
  'translations',
  'weakEndings',
  'variations'
];
export type GermanValidKey = typeof ALL_GERMAN_VALID_KEYS[number];

const isGermanValidKey = (value: string): value is GermanValidKey => {
  return ALL_GERMAN_VALID_KEYS.includes(value as GermanValidKey);
}

export enum GermanTenses {
  präsens = 'präsens', // present
  präteritum = 'präteritum', // past
  futur = 'futur', // compound and futre
  perfekt = 'perfekt', // compound
  konjunktiv = 'konjunktiv',
  k2präsens = 'k2präsens', // subjunctive and imperitive
  k2präteritum = 'k2präteritum',
}

export type GermanIrregularSet = { GermanPronounKeys?: string };
type GermanIrregularKeys = GermanTenses.präsens | GermanTenses.präteritum;
export type GermanIrregularObject = { [key in GermanIrregularKeys]: GermanIrregularSet };

const ALL_GERMAN_STEMS = ['duEs', 'k2präsens', 'konjunktiv', 'partizip', 'präsensSingular', 'präteritum'] as const;
export type GermanStem = typeof ALL_GERMAN_STEMS[number];

// export enum GermanStems {
//   duEs = 'duEs',
//   k2präsens = 'k2präsens',
//   konjunktiv = 'konjunktiv',
//   partizip = 'partizip',
//   präsensSingular = 'präsensSingular',
//   präteritum = 'präteritum',
// }

export type GermanVerbHydrated = {
  [key in GermanTenses]?: { [person: string]: string };
} & {
  language: string;
  hilfsverb: string;
  infinitive: string;
  partizip: string;
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

export const GermanPronounKeys: { [key in GermanKeyPronoun]: number } = {
  ich:
    GrammaticalPerson.First.valueOf() +
    GrammaticalNumber.Singular.valueOf() +
    GermanCase.Nominative.valueOf(),
  du:
    GrammaticalPerson.Second.valueOf() +
    GrammaticalNumber.Singular.valueOf() +
    GrammaticalFormal.Informal.valueOf() +
    GermanCase.Nominative.valueOf(),
  es:
    GrammaticalPerson.Third.valueOf() +
    GrammaticalNumber.Singular.valueOf() +
    GermanCase.Nominative.valueOf() +
    GrammaticalGender.Neuter.valueOf(),
  wir:
    GrammaticalPerson.First.valueOf() +
    GrammaticalNumber.Plural.valueOf() +
    GermanCase.Nominative.valueOf(),
  ihr:
    GrammaticalPerson.Second.valueOf() +
    GrammaticalNumber.Plural.valueOf() +
    GrammaticalFormal.Informal.valueOf() +
    GermanCase.Nominative.valueOf(),
};

export type GermanIrregular = {
  präteritum: {
    [key in GermanKeyPronoun]?: string
  };
  partizip:  {
    [key in GermanKeyPronoun]?: string
  };
};

export interface GermanVerb extends LanguageVerbBase {
  drop: boolean;
  hilfsverb: string;
  infinitive: string;
  irregular?: GermanIrregularObject;
  partizip?: string;
  stems?: { [key in GermanStem]?: string };
  strong?: boolean;
  variations?: Array<Partial<GermanVerb> | {definition: string}>;
  weakEndings?: boolean;
};

export const validKeys = [
  'drop',
  'hilfsverb',
  'infinitive',
  'irregular',
  'language',
  'partizip',
  'stems',
  'strong',
  'translations',
  'weakEndings',
];

export const isGermanVerb = (x: object): x is GermanVerb => {
  let isValid = true;

  if ('language' in x && (x.language !== 'de')) {
    return false;
  }

  const xKeys = Object.keys(x);
  xKeys.forEach((key: string) => {
    if (!ALL_GERMAN_VALID_KEYS.includes(key)) {
      isValid = false;
    }
  });

  if ('irregular' in x) {
    const irregular = x['irregular'];
    
    if (irregular && typeof irregular === 'object') {
      for (let tenseKey of Object.keys(irregular!)) {
        if (tenseKey === 'präteritum' || tenseKey === 'präsens') {
          const irregularTense: Record<string, unknown> = irregular[tenseKey as keyof typeof irregular];
          const tensePronouns = Object.keys(irregularTense);

          tensePronouns.forEach((pronoun: string) => {
            if (!isGermanKeyPronoun(pronoun) || typeof irregularTense[pronoun] !== 'string') {
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
};

const validSeperableKeys = ['base', 'hilfsverb', 'language', 'particle', 'translations'];

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
