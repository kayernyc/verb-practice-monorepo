import { GermanCase } from '@german/germanTypes';
import {
  GrammaticalFormal,
  GrammaticalGender,
  GrammaticalNumber,
  GrammaticalPerson,
} from '../../languageTypes';

export const GermanPronounsCodeToString = (bitwisePerson: number) => {
  /*
    The order of the cases is important.
    Also, for certain cases there is a one-to-many relationship.
    These cases have to be tested agains the bitwise value.
  */
  switch (bitwisePerson) {
    case GrammaticalPerson.First.valueOf() +
      GrammaticalNumber.Singular.valueOf() +
      GermanCase.Nominative.valueOf():
      return 'ich';
    case GrammaticalPerson.First.valueOf() +
      GrammaticalNumber.Singular.valueOf() +
      GermanCase.Accusative.valueOf():
      return 'mich';
    case GrammaticalPerson.First.valueOf() +
      GrammaticalNumber.Singular.valueOf() +
      GermanCase.Dative.valueOf():
      return 'mir';
    case GrammaticalPerson.First.valueOf() +
      GrammaticalNumber.Singular.valueOf() +
      GermanCase.Genative.valueOf():
      return 'meiner';
    case GrammaticalPerson.First.valueOf() +
      GrammaticalNumber.Plural.valueOf() +
      GermanCase.Nominative.valueOf():
      return 'wir';
    case (GrammaticalPerson.First.valueOf() +
      GrammaticalNumber.Plural.valueOf() +
      GermanCase.Accusative.valueOf() +
      GermanCase.Dative.valueOf()) &
      bitwisePerson.valueOf():
      return 'uns';
    case (GrammaticalPerson.First.valueOf() +
      GrammaticalNumber.Plural.valueOf() +
      GermanCase.Genative.valueOf()) &
      bitwisePerson.valueOf():
      return 'unserer';
    case GrammaticalPerson.Second.valueOf() +
      GrammaticalNumber.Singular.valueOf() +
      GermanCase.Nominative.valueOf() +
      GrammaticalFormal.Informal.valueOf():
      return 'du';
    case GrammaticalPerson.Second.valueOf() +
      GrammaticalNumber.Singular.valueOf() +
      GermanCase.Accusative.valueOf() +
      GrammaticalFormal.Informal.valueOf():
      return 'dich';
    case GrammaticalPerson.Second.valueOf() +
      GrammaticalNumber.Singular.valueOf() +
      GermanCase.Dative.valueOf() +
      GrammaticalFormal.Informal.valueOf():
      return 'dir';
    case GrammaticalPerson.Second.valueOf() +
      GrammaticalNumber.Singular.valueOf() +
      GermanCase.Genative.valueOf() +
      GrammaticalFormal.Informal.valueOf():
      return 'deiner';
    case (GrammaticalPerson.Third.valueOf() +
      GermanCase.Dative.valueOf() +
      GrammaticalGender.Feminine.valueOf() +
      GrammaticalNumber.Singular.valueOf()) &
      bitwisePerson.valueOf():
    case GrammaticalPerson.Second.valueOf() +
      GrammaticalNumber.Plural.valueOf() +
      GrammaticalFormal.Informal.valueOf() +
      GermanCase.Nominative.valueOf():
      return 'ihr';
    case (GrammaticalPerson.Second.valueOf() +
      GrammaticalNumber.Plural.valueOf() +
      GrammaticalFormal.Informal.valueOf() +
      GermanCase.Accusative.valueOf() +
      GermanCase.Dative.valueOf()) &
      bitwisePerson:
      return 'euch';
    case (GrammaticalPerson.Second.valueOf() +
      GrammaticalNumber.Plural.valueOf() +
      GrammaticalFormal.Informal.valueOf() +
      GermanCase.Genative.valueOf()) &
      bitwisePerson.valueOf():
      return 'euerer';
    case (GrammaticalPerson.Third.valueOf() +
      GermanCase.Nominative.valueOf() +
      GermanCase.Accusative.valueOf() +
      GrammaticalGender.Feminine.valueOf() +
      GrammaticalNumber.Singular.valueOf()) &
      bitwisePerson.valueOf():
    case (GrammaticalPerson.Third.valueOf() +
      GermanCase.Nominative.valueOf() +
      GermanCase.Accusative.valueOf() +
      GrammaticalNumber.Plural.valueOf()) &
      bitwisePerson.valueOf():
      return 'sie';
    case (GrammaticalPerson.Third.valueOf() +
      GermanCase.Dative.valueOf() +
      GrammaticalNumber.Plural.valueOf()) &
      bitwisePerson.valueOf():
      return 'ihnen';
    case GrammaticalPerson.Third.valueOf() +
      GrammaticalNumber.Singular.valueOf() +
      GrammaticalGender.Feminine.valueOf() +
      GermanCase.Genative.valueOf():
    case GrammaticalPerson.Third.valueOf() +
      GrammaticalNumber.Plural.valueOf() +
      GermanCase.Genative.valueOf():
      return 'ihrer';
    case GrammaticalPerson.Third.valueOf() +
      GrammaticalNumber.Singular.valueOf() +
      GrammaticalGender.Masculine.valueOf() +
      GermanCase.Nominative.valueOf():
      return 'er';
    case GrammaticalPerson.Third.valueOf() +
      GrammaticalNumber.Singular.valueOf() +
      GrammaticalGender.Masculine.valueOf() +
      GermanCase.Accusative.valueOf():
      return 'ihn';
    case (GrammaticalPerson.Third.valueOf() +
      GrammaticalNumber.Singular.valueOf() +
      GrammaticalGender.Masculine.valueOf() +
      GrammaticalGender.Neuter.valueOf() +
      GermanCase.Dative.valueOf()) &
      bitwisePerson.valueOf():
      return 'ihm';
    case (GrammaticalPerson.Third.valueOf() +
      GrammaticalNumber.Singular.valueOf() +
      GrammaticalGender.Neuter.valueOf() +
      GermanCase.Nominative.valueOf() +
      GermanCase.Accusative.valueOf()) &
      bitwisePerson.valueOf():
      return 'es';
    case (GrammaticalPerson.Third.valueOf() +
      GrammaticalNumber.Singular.valueOf() +
      GrammaticalGender.Neuter.valueOf() +
      GrammaticalGender.Masculine.valueOf() +
      GermanCase.Genative.valueOf()) &
      bitwisePerson.valueOf():
      return 'seiner';
    case (GrammaticalPerson.Second.valueOf() +
      GrammaticalFormal.Formal.valueOf() +
      GermanCase.Accusative.valueOf() +
      GermanCase.Nominative.valueOf() +
      GrammaticalNumber.Plural.valueOf() +
      GrammaticalNumber.Singular.valueOf()) &
      bitwisePerson.valueOf():
      return 'Sie';
    case (GrammaticalPerson.Second.valueOf() +
      GrammaticalFormal.Formal.valueOf() +
      GermanCase.Dative.valueOf() +
      GrammaticalNumber.Plural.valueOf() +
      GrammaticalNumber.Singular.valueOf()) &
      bitwisePerson.valueOf():
      return 'Ihnen';
    case GrammaticalPerson.Second.valueOf() +
      GrammaticalFormal.Formal.valueOf() +
      GermanCase.Genative.valueOf() +
      GrammaticalNumber.Plural.valueOf():
      return 'Ihrer';
    default:
      return 'Man';
  }
};

export default GermanPronounsCodeToString;
