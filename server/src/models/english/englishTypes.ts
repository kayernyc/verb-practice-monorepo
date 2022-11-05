import { LanguageMap } from '@models/jsonTypes';
import { GrammaticalNumber, GrammaticalPerson } from '@models/languageTypes';

export const EnglishPronounKeys: { [key: string]: number } = {
  i: GrammaticalPerson.First.valueOf() + GrammaticalNumber.Singular.valueOf(),
  you:
    GrammaticalPerson.Second.valueOf(),
  it:
    GrammaticalPerson.Third.valueOf()
    + GrammaticalNumber.Singular.valueOf(),
  we: GrammaticalPerson.First.valueOf() + GrammaticalNumber.Plural.valueOf(),
  they:
    GrammaticalPerson.Third.valueOf()
    + GrammaticalNumber.Plural.valueOf(),
};

export enum EnglishTenses {
  present = 'present', // present
  past = 'past', // simple past
}

export type EnglishIrregularObject = {
  [key in EnglishTenses]?: string | string[] | { EnglishPronounKeys?: string }
}

export type EnglishVerb = {
  infinitive: string;
  irregular?: EnglishIrregularObject;
  translations: LanguageMap;
  participle?: string;
};
