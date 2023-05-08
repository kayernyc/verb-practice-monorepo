import {
  LanguageMap,
  GrammaticalNumber,
  GrammaticalPerson,
  LanguageVerbBase,
} from 'global-types';

export const EnglishPronounKeys: { [key: string]: number } = {
  i: GrammaticalPerson.First.valueOf() + GrammaticalNumber.Singular.valueOf(),
  you: GrammaticalPerson.Second.valueOf(),
  it: GrammaticalPerson.Third.valueOf() + GrammaticalNumber.Singular.valueOf(),
  we: GrammaticalPerson.First.valueOf() + GrammaticalNumber.Plural.valueOf(),
  they: GrammaticalPerson.Third.valueOf() + GrammaticalNumber.Plural.valueOf(),
};

const ALL_ENGLISH_KEY_PRONOUNS = ['i', 'you', 'it', 'we', 'they'] as const;
export type EnglishKeyPronoun = typeof ALL_ENGLISH_KEY_PRONOUNS[number];

const isGermanKeyPronoun = (value: string): value is EnglishKeyPronoun => {
  return ALL_ENGLISH_KEY_PRONOUNS.includes(value as EnglishKeyPronoun);
};

const ALL_ENGLISH_VALID_KEYS = [
  'auxilliary',
  'infinitive',
  'irregular',
  'language',
  'participle',
  'variations',
  'translations',
  'defective',
];
export type EnglishValidKey = typeof ALL_ENGLISH_VALID_KEYS[number];

export enum EnglishTenses {
  present = 'present', // present
  past = 'past', // simple past
}

export type EnglishIrregularObject = {
  [key in EnglishTenses]?: string | string[] | { EnglishPronounKeys?: string };
};

export interface EnglishVerb extends LanguageVerbBase {
  infinitive: string;
  irregular?: EnglishIrregularObject;
  participle?: string;
}

export interface EnglishVerbDictionary {
  [key: string]: EnglishVerb;
}

export interface EnglishJsonData {
  date: number;
  verbs: EnglishVerbDictionary;
}

export type EnglishVerbHydrated = {
  [key in EnglishTenses]?: { [person: string]: string };
} & {
  infinitive: string;
  participle: string;
  presentParticiple: string;
};

export const isEnglishVerb = (x: object): x is EnglishVerb => {
  let isValid = true;
  if ('language' in x && x.language !== 'en') {
    return false;
  }

  const xKeys = Object.keys(x);

  xKeys.forEach((key: string) => {
    if (!ALL_ENGLISH_VALID_KEYS.includes(key)) {
      isValid = false;
    }
  });

  if ('irregular' in x && typeof x['irregular'] === 'object') {
    const irregular = x['irregular']!;
    const irregularTenses: string[] = Object.values(EnglishTenses);
    Object.keys(irregular).forEach((tense: string) => {
      if (!irregularTenses.includes(tense)) {
        isValid = false;
      }
    });
  }

  return isValid;
};
