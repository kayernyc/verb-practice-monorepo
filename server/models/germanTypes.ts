import {
  GrammaticalFormal,
  GrammaticalNumber,
  GrammaticalPerson
} from "./languageTypes"

export type GermanVerb = {
  drop: boolean;
  hilfsverb: string;
  infinitive: string;
  irregular?: [GermanTenses: [GermanPronoun: string]];
  languages: string[];
  stems?: GermanStems;
  strong: [string: boolean] | boolean;
}

export type GermanStems = {
  duEs?: string;
  präteritum?: string;
  partizip?: string;
  präsensSingular?: string;
  k2präsens?: string;
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

export type GermanPronoun = {
  grammaticalPerson: GrammaticalPerson,
  grammaticalNumber: GrammaticalNumber,
  grammaticalFormal: GrammaticalFormal,
  pronoun: [GermanCase: string]
}

