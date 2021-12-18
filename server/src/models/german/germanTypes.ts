import { GrammaticalFormal, GrammaticalGender, GrammaticalNumber, GrammaticalPerson } from '../languageTypes';

export interface LanguageMap {
  en?: string;
  fr?: string;
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

export enum GermanStems {
  duEs = 'duEs',
  präteritum = 'präteritum',
  partizip = 'partizip',
  präsensSingular = 'präsensSingular',
  k2präsens = 'k2präsens',
}

export type GermanVerbHydrated = {
  [key in GermanTenses]?: { [person: string]: string };
} & {
  partizip: string;
};

export type GermanVerb = {
  drop: boolean;
  hilfsverb: string;
  infinitive: string;
  irregular?: { GermanTenses?: [GermanPronounKeys: string] };
  languages: LanguageMap;
  stems?: { [key in GermanStems]?: string };
  strong?: [string: boolean] | boolean;
  weakEndings?: boolean;
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
  ich: GrammaticalPerson.First.valueOf() + GrammaticalNumber.Singular.valueOf() + GermanCase.Nominative.valueOf(),
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
  wir: GrammaticalPerson.First.valueOf() + GrammaticalNumber.Plural.valueOf() + GermanCase.Nominative.valueOf(),
  ihr:
    GrammaticalPerson.Second.valueOf() +
    GrammaticalNumber.Plural.valueOf() +
    GrammaticalFormal.Informal.valueOf() +
    GermanCase.Nominative.valueOf(),
};
