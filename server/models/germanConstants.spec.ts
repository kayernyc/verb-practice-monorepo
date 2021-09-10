import { GrammaticalFormal, GrammaticalPerson, GrammaticalGender, GrammaticalNumber } from './languageTypes';
import { GermanPronoun } from './germanConstants';
import { GermanCase } from './germanTypes';

const pronounArray: [string, number][] = [
  ['ich', GrammaticalPerson.First + GrammaticalNumber.Singular + GermanCase.Nominative],
  ['mich', GrammaticalPerson.First + GrammaticalNumber.Singular + GermanCase.Accusative],
  ['mir', GrammaticalPerson.First + GrammaticalNumber.Singular + GermanCase.Dative],
  ['meiner', GrammaticalPerson.First + GrammaticalNumber.Singular + GermanCase.Genative],
  ['du', GrammaticalPerson.Second + GrammaticalNumber.Singular + GermanCase.Nominative + GrammaticalFormal.Informal],
  ['dich', GrammaticalPerson.Second + GrammaticalNumber.Singular + GermanCase.Accusative + GrammaticalFormal.Informal],
  ['dir', GrammaticalPerson.Second + GrammaticalNumber.Singular + GermanCase.Dative + GrammaticalFormal.Informal],
  ['deiner', GrammaticalPerson.Second + GrammaticalNumber.Singular + GermanCase.Genative + GrammaticalFormal.Informal],
  ['es', GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Neuter + GermanCase.Nominative],
  ['es', GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Neuter + GermanCase.Accusative],
  ['ihm', GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Neuter + GermanCase.Dative],
  ['seiner', GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Neuter + GermanCase.Genative],
  ['er', GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Masculine + GermanCase.Nominative],
  ['ihn', GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Masculine + GermanCase.Accusative],
  ['ihm', GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Masculine + GermanCase.Dative],
  ['seiner', GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Masculine + GermanCase.Genative],
  ['sie', GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Feminine + GermanCase.Nominative],
  ['sie', GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Feminine + GermanCase.Accusative],
  ['ihr', GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Feminine + GermanCase.Dative],
  ['ihrer', GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Feminine + GermanCase.Genative],
  ['wir', GrammaticalPerson.First + GrammaticalNumber.Plural + GermanCase.Nominative],
  ['uns', GrammaticalPerson.First + GrammaticalNumber.Plural + GermanCase.Accusative],
  ['uns', GrammaticalPerson.First + GrammaticalNumber.Plural + GermanCase.Dative],
  ['unserer', GrammaticalPerson.First + GrammaticalNumber.Plural + GermanCase.Genative],
  ['ihr', GrammaticalPerson.Second + GrammaticalNumber.Plural + GermanCase.Nominative + GrammaticalFormal.Informal],
  ['euch', GrammaticalPerson.Second + GrammaticalNumber.Plural + GermanCase.Accusative + GrammaticalFormal.Informal],
  ['euch', GrammaticalPerson.Second + GrammaticalNumber.Plural + GermanCase.Dative + GrammaticalFormal.Informal],
  ['euerer', GrammaticalPerson.Second + GrammaticalNumber.Plural + GermanCase.Genative + GrammaticalFormal.Informal],
  ['sie', GrammaticalPerson.Third + GrammaticalNumber.Plural + GermanCase.Nominative],
  ['sie', GrammaticalPerson.Third + GrammaticalNumber.Plural + GermanCase.Accusative],
  ['ihnen', GrammaticalPerson.Third + GrammaticalNumber.Plural + GermanCase.Dative],
  ['ihrer', GrammaticalPerson.Third + GrammaticalNumber.Plural + GermanCase.Genative],
  ['Sie', GrammaticalPerson.Second + GrammaticalFormal.Formal + GermanCase.Nominative + GrammaticalNumber.Plural],
  ['Sie', GrammaticalPerson.Second + GrammaticalFormal.Formal + GermanCase.Accusative + GrammaticalNumber.Plural],
  ['Ihnen', GrammaticalPerson.Second + GrammaticalFormal.Formal + GermanCase.Dative + GrammaticalNumber.Plural],

]

for (const tuple of pronounArray) {
  const [result, value] = tuple;

  it(`A correct grammatical description of ${result} returns the correct pronoun`, () => {
    const testValue = GermanPronoun(value);
    expect(testValue).toBe(result);
  });
}


