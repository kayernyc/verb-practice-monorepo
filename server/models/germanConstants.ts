import { GrammaticalPerson, GrammaticalNumber, GrammaticalFormal, GrammaticalGender } from "./languageTypes";

// tslint:disable: no-bitwise
import { GermanCase } from "./germanTypes";

export const GermanPronoun = (bitwisePerson: number) => {
  switch (bitwisePerson) {
    case GrammaticalPerson.First + GrammaticalNumber.Singular + GermanCase.Nominative:
      return 'ich'
    case GrammaticalPerson.First + GrammaticalNumber.Singular + GermanCase.Accusative:
      return 'mich'
    case GrammaticalPerson.First + GrammaticalNumber.Singular + GermanCase.Dative:
      return 'mir'
    case GrammaticalPerson.First + GrammaticalNumber.Singular + GermanCase.Genative:
      return 'meiner'
    case GrammaticalPerson.First + GrammaticalNumber.Plural + GermanCase.Nominative:
      return 'wir'
    case (GrammaticalPerson.First + GrammaticalNumber.Plural + GermanCase.Accusative + GermanCase.Dative) & bitwisePerson:
      return 'uns'
    case (GrammaticalPerson.First + GrammaticalNumber.Plural + GermanCase.Genative) & bitwisePerson:
      return 'unserer'
    case GrammaticalPerson.Second + GrammaticalNumber.Singular + GermanCase.Nominative + GrammaticalFormal.Informal:
      return 'du'
    case GrammaticalPerson.Second + GrammaticalNumber.Singular + GermanCase.Accusative + GrammaticalFormal.Informal:
      return 'dich'
    case GrammaticalPerson.Second + GrammaticalNumber.Singular + GermanCase.Dative + GrammaticalFormal.Informal:
      return 'dir'
    case GrammaticalPerson.Second + GrammaticalNumber.Singular + GermanCase.Genative + GrammaticalFormal.Informal:
      return 'deiner'
    case (GrammaticalPerson.Third + GermanCase.Dative + GrammaticalGender.Feminine + GrammaticalNumber.Singular) & bitwisePerson:
    case GrammaticalPerson.Second + GrammaticalNumber.Plural + GrammaticalFormal.Informal + GermanCase.Nominative:
      return 'ihr'
    case (GrammaticalPerson.Second + GrammaticalNumber.Plural + GrammaticalFormal.Informal + GermanCase.Accusative + GermanCase.Dative) & bitwisePerson:
      return 'euch'
    case (GrammaticalPerson.Second + GrammaticalNumber.Plural + GrammaticalFormal.Informal + GermanCase.Genative) & bitwisePerson:
      return 'euerer'
    case (GrammaticalPerson.Third + GermanCase.Nominative + GermanCase.Accusative + GrammaticalGender.Feminine + GrammaticalNumber.Singular) & bitwisePerson:
    case (GrammaticalPerson.Third + GermanCase.Nominative + GermanCase.Accusative + GrammaticalNumber.Plural) & bitwisePerson:
      return 'sie'
    case GrammaticalPerson.Third + GermanCase.Dative + GrammaticalNumber.Plural:
      return 'ihnen'
    case GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Feminine + GermanCase.Genative:
    case GrammaticalPerson.Third + GrammaticalNumber.Plural + GermanCase.Genative:
      return 'ihrer'
    case GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Masculine + GermanCase.Nominative:
      return 'er'
    case GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Masculine + GermanCase.Accusative:
      return 'ihn'
    case (GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Masculine + GrammaticalGender.Neuter + GermanCase.Dative) & bitwisePerson:
      return 'ihm'
    case (GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Neuter + GermanCase.Nominative + GermanCase.Accusative) & bitwisePerson:
      return 'es'
    case (GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Neuter + GrammaticalGender.Masculine + GermanCase.Genative) & bitwisePerson:
      return 'seiner'
    case (GrammaticalPerson.Second + GrammaticalFormal.Formal + GermanCase.Accusative + GermanCase.Nominative + GrammaticalNumber.Plural + GrammaticalNumber.Singular) & bitwisePerson:
      return 'Sie'
    case (GrammaticalPerson.Second + GrammaticalFormal.Formal + GermanCase.Dative + GrammaticalNumber.Plural + GrammaticalNumber.Singular) & bitwisePerson:
      return 'Ihnen'
    case (GrammaticalPerson.Second + GrammaticalFormal.Formal + GermanCase.Genative + GrammaticalNumber.Plural + GrammaticalNumber.Singular) & bitwisePerson:
      return 'Ihrer'
    default:
      return 'Man'
  }
}
// tslint:enable: no-bitwise