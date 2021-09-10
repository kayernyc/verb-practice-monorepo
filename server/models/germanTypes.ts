import { GrammaticalFormal, GrammaticalGender, GrammaticalNumber, GrammaticalPerson } from "./languageTypes"

declare type GermanVerb = {
  drop: boolean;
  hilfsverb: string;
  infinitive: string;
  irregular?: [GermanTenses: [GermanPronoun: string]];
  languages: string[];
  stems?: GermanStems;
  strong: [string: boolean] | boolean;
}

declare type GermanStems = {
  duEs?: string;
  präteritum?: string;
  partizip?: string;
  präsensSingular?: string;
  k2präsens?: string;
}

declare type GermanIrregular = {
  präteritum: string;
  partizip: string;
}

declare enum GermanCase {
  Nominative,
  Accusative,
  Dative,
  Genative
}

declare type GermanPronoun = {
  grammaticalPerson: GrammaticalPerson,
  grammaticalNumber: GrammaticalNumber,
  grammaticalFormal: GrammaticalFormal,
  pronoun: [GermanCase: string]
}

