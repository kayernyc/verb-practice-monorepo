import {
  GrammaticalFormal, GrammaticalGender, GrammaticalNumber, GrammaticalPerson,
} from '../languageTypes';

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
  ich: GrammaticalPerson.First.valueOf() + GrammaticalNumber.Singular.valueOf()
    + GermanCase.Nominative.valueOf(),
  du:
    GrammaticalPerson.Second.valueOf()
    + GrammaticalNumber.Singular.valueOf()
    + GrammaticalFormal.Informal.valueOf()
    + GermanCase.Nominative.valueOf(),
  es:
    GrammaticalPerson.Third.valueOf()
    + GrammaticalNumber.Singular.valueOf()
    + GermanCase.Nominative.valueOf()
    + GrammaticalGender.Neuter.valueOf(),
  wir: GrammaticalPerson.First.valueOf() + GrammaticalNumber.Plural.valueOf()
    + GermanCase.Nominative.valueOf(),
  ihr:
    GrammaticalPerson.Second.valueOf()
    + GrammaticalNumber.Plural.valueOf()
    + GrammaticalFormal.Informal.valueOf()
    + GermanCase.Nominative.valueOf(),
};

export type GermanVerb = {
  drop: boolean;
  hilfsverb: string;
  infinitive: string;
  irregular?: GermanIrregularObject;
  languages: LanguageMap;
  partizip?: string;
  stems?: { [key in GermanStems]?: string };
  strong?: [string: boolean] | boolean;
  weakEndings?: boolean;
};
