import {
  GrammaticalFormal,
  GrammaticalGender,
  GrammaticalNumber,
  GrammaticalPerson
} from "../languageTypes"

export interface LanguageMap {
  en?: string
  fr?: string
}

export type GermanVerbHydrated = {
  [key in GermanTenses]?: { [person: string]: string };
} & {
  partizip: string
}

export type GermanVerb = {
  drop: boolean;
  hilfsverb: string;
  infinitive: string;
  irregular?: { GermanTenses?: [GermanPronounKeys: string] };
  languages: LanguageMap;
  stems?: { [key in GermanStems]?: string };
  strong?: [string: boolean] | boolean;
  weakEndings?: boolean;
}

export enum GermanStems {
  duEs = 'duEs',
  präteritum = 'präteritum',
  partizip = 'partizip',
  präsensSingular = 'präsensSingular',
  k2präsens = 'k2präsens'
}

export type GermanIrregular = {
  präteritum: string;
  partizip: string;
}

// tslint:disable: no-bitwise
export enum GermanCase {
  Nominative = 1 << 10,  // 1024
  Accusative = 1 << 11, // 2048
  Dative = 1 << 12, // 4096
  Genative = 1 << 13 // 8192
}
// tslint:enable: no-bitwise

export enum GermanTenses {
  präsens = "präsens", // present
  präteritum = "präteritum", // past
  futur = "futur", // compound and futre
  perfekt = "perfekt", // compound
  konjunktiv = 'konjunktiv',
  k2präsens = "k2präsens", // subjunctive and imperitive
  k2präteritum = "k2präteritum"
}

export type GermanPronoun = {
  grammaticalPerson: GrammaticalPerson,
  grammaticalNumber: GrammaticalNumber,
  grammaticalFormal: GrammaticalFormal,
  case: GermanCase
}

export const GermanPronounKeys = {
  'ich': (GrammaticalPerson.First + GrammaticalNumber.Singular + GermanCase.Nominative),
  'du': (GrammaticalPerson.Second + GrammaticalNumber.Singular + GrammaticalFormal.Informal + GermanCase.Nominative),
  'es': (GrammaticalPerson.Third + GrammaticalNumber.Singular + GermanCase.Nominative + GrammaticalGender.Neuter),
  'wir': (GrammaticalPerson.First + GrammaticalNumber.Plural + GermanCase.Nominative),
  'ihr': (GrammaticalPerson.Second + GrammaticalNumber.Plural + GrammaticalFormal.Informal + GermanCase.Nominative)
}

