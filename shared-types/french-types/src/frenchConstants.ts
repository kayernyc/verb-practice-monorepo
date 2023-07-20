import { GrammaticalPerson, GrammaticalNumber, GrammaticalFormal, GrammaticalGender } from "global-types";

export const frenchVowels = ['æ', 'â', 'à', 'ë', 'ê', 'è', 'é', 'ï', 'î', 'œ', 'ô', 'ü', 'û', 'ù', 'ÿ', 'y', 'a', 'e', 'i', 'o', 'u'];

export enum FrenchCase {
  Subject = 1 << 10, // 1024
  Object = 1 << 11, // 2048
  Indirect = 1 << 12, // 4096
  Reflexive = 1 << 13, // 8192
}

export type FrenchPronoun = {
  grammaticalPerson: GrammaticalPerson;
  grammaticalNumber: GrammaticalNumber;
  grammaticalFormal: GrammaticalFormal;
  case: FrenchCase;
};

const ALL_FRENCH_KEY_PRONOUNS = ['je', 'tu', 'il', 'nous', 'vous', 'ils'];
export type FrenchKeyPronoun = typeof ALL_FRENCH_KEY_PRONOUNS[number];

export enum FrenchPronounCode {
  'je' = GrammaticalPerson.First.valueOf() +
  GrammaticalNumber.Singular.valueOf() +
  FrenchCase.Subject.valueOf(),
  'tu' = GrammaticalPerson.Second.valueOf() +
  GrammaticalNumber.Singular.valueOf() +
  GrammaticalFormal.Informal.valueOf() +
  FrenchCase.Subject.valueOf(),
  'il' = GrammaticalPerson.Third.valueOf() +
  GrammaticalNumber.Singular.valueOf() +
  FrenchCase.Subject.valueOf() +
  GrammaticalGender.Masculine.valueOf(),
  'nous' = GrammaticalPerson.First.valueOf() +
  GrammaticalNumber.Plural.valueOf() +
  FrenchCase.Subject.valueOf(),
  'vous' = GrammaticalPerson.Second.valueOf() +
  GrammaticalNumber.Plural.valueOf() +
  GrammaticalFormal.Formal.valueOf() +
  FrenchCase.Subject.valueOf(),
  'ils' = GrammaticalPerson.Third.valueOf() +
  GrammaticalNumber.Plural.valueOf() +
  FrenchCase.Subject.valueOf() +
  GrammaticalGender.Masculine.valueOf(),
  'on' = GrammaticalPerson.Third.valueOf() +
  GrammaticalNumber.Singular.valueOf() +
  FrenchCase.Subject.valueOf() +
  GrammaticalGender.Indefinite.valueOf(),
  'elle' = GrammaticalPerson.Third.valueOf() +
  GrammaticalNumber.Singular.valueOf() +
  FrenchCase.Subject.valueOf() +
  GrammaticalGender.Feminine.valueOf(),
  'elles' = GrammaticalPerson.Third.valueOf() +
  GrammaticalNumber.Plural.valueOf() +
  FrenchCase.Subject.valueOf() +
  GrammaticalGender.Feminine.valueOf(),
}

export const FrenchPronounKeys: { [key in FrenchKeyPronoun]: number } = {
  // 1033
  je:
    GrammaticalPerson.First.valueOf() +
    GrammaticalNumber.Singular.valueOf() +
    FrenchCase.Subject.valueOf(),
  // 1098
  tu:
    GrammaticalPerson.Second.valueOf() +
    GrammaticalNumber.Singular.valueOf() +
    GrammaticalFormal.Informal.valueOf() +
    FrenchCase.Subject.valueOf(),
  // 1548
  il:
    GrammaticalPerson.Third.valueOf() +
    GrammaticalNumber.Singular.valueOf() +
    FrenchCase.Subject.valueOf() +
    GrammaticalGender.Masculine.valueOf(),
  // 1041
  nous:
    GrammaticalPerson.First.valueOf() +
    GrammaticalNumber.Plural.valueOf() +
    FrenchCase.Subject.valueOf(),
  // 1106
  vous:
    GrammaticalPerson.Second.valueOf() +
    GrammaticalNumber.Plural.valueOf() +
    GrammaticalFormal.Formal.valueOf() +
    FrenchCase.Subject.valueOf(),
  ils:
    GrammaticalPerson.Third.valueOf() +
    GrammaticalNumber.Plural.valueOf() +
    FrenchCase.Subject.valueOf() +
    GrammaticalGender.Masculine.valueOf(),
} as const;
