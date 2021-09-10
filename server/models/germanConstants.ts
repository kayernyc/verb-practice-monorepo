import { GrammaticalPerson, GrammaticalNumber, GrammaticalFormal, GrammaticalGender } from "./languageTypes";

export enum GermanCase {
  Nominative = 1 << 10,  // 1024
  Accusative = 1 << 11, // 2048
  Dative = 1 << 12, // 4096
  Genative = 1 << 13 // 8192
}

export const GermanPronoun = (bitwisePerson: number) => {
  switch (bitwisePerson) {
    case GrammaticalPerson.First + GrammaticalNumber.Singular + GermanCase.Nominative:
      return 'ich'
    case GrammaticalPerson.First + GrammaticalNumber.Plural + GermanCase.Nominative:
      return 'wir'
    case GrammaticalPerson.Second + GrammaticalNumber.Singular + GermanCase.Nominative:
      return 'du'
    case GrammaticalPerson.Second + GrammaticalNumber.Plural + GrammaticalFormal.Informal + GermanCase.Nominative:
    case GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Feminine + GermanCase.Dative:
      return 'ihr'
    case GrammaticalPerson.Third + (GermanCase.Nominative | GermanCase.Accusative) +
      ((GrammaticalNumber.Singular & GrammaticalGender.Feminine) |
        (GrammaticalNumber.Plural & GrammaticalGender.None)):
      return 'sie'
    case GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Masculine:
      return 'er'
    case GrammaticalPerson.Second + (GrammaticalNumber.Plural | GrammaticalNumber.Singular) + GrammaticalFormal.Formal + (GermanCase.Nominative | GermanCase.Accusative):
      return 'Sie'
    default:
      return 'Man'
  }
}