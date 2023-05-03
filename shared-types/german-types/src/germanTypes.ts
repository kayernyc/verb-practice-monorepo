import { SeperableGermanParticles } from './germanConstants';
import {
  GrammaticalFormal,
  GrammaticalGender,
  GrammaticalNumber,
  GrammaticalPerson,
  LanguageMap,
  LanguageVerbBase
} from 'global-types';

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
export type GermanIrregularObject = { [key in GermanTenses]?: GermanIrregularSet };

export enum GermanStems {
  duEs = 'duEs',
  k2präsens = 'k2präsens',
  konjunktiv = 'konjunktiv',
  partizip = 'partizip',
  präsensSingular = 'präsensSingular',
  präteritum = 'präteritum',
}

export type GermanVerbHydrated = {
  [key in GermanTenses]?: { [person: string]: string };
} & {
  language: string;
  hilfsverb: string;
  infinitive: string;
  partizip: string;
};

export type GermanIrregular = {
  präteritum: string;
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

export const GermanPronounKeys: { [key: string]: number } = {
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

export type GermanVerb = {
  drop: boolean;
  hilfsverb: string;
  infinitive: string;
  irregular?: GermanIrregularObject;
  language: LanguageMap | string;
  partizip?: string;
  stems?: { [key in GermanStems]?: string };
  strong?: [string: boolean] | boolean;
  translations: LanguageMap;
  variations?: Array<GermanVerb | {definition: string}>;
  weakEndings?: boolean;
};

const validKeys = [
  'drop',
  'hilfsverb',
  'infinitive',
  'irregular',
  'language',
  'partizip',
  'stems',
  'strong',
  'translations',
  'weekEndings',
];

export const GermanVerbTypeGuard = (x: object): x is GermanVerb => {
  let returnValue = true;
  
  if ('language' in x && (x.language !== 'de')) {
    return false;
  }

  const xKeys = Object.keys(x);
  xKeys.forEach((key: string) => {
    if (!validKeys.includes(key)) {
      returnValue = false;
    }
  });

  return 'language' in x && returnValue;
};

export type GermanSeparableVerb = {
  base: string;
  hilfsverb: string;
  language: LanguageMap | string;
  particle: SeperableGermanParticles;
  translations: LanguageMap;
};

const validSeperableKeys = ['base', 'hilfsverb', 'language', 'particle', 'translations'];

export const GermanSeparableVerbTypeGuard = (x: object): x is GermanSeparableVerb => {
  let returnValue = true;

  const xKeys = Object.keys(x);
  xKeys.forEach((key: string) => {
    if (!validSeperableKeys.includes(key)) {
      returnValue = false;
    }
  });

  return 'language' in x && returnValue;
};
