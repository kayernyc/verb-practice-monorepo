import { LanguageVerbBase, TranslationSet } from "global-types";
import { FrenchPronounCode } from "src/frenchConstants";

const ALL_FRENCH_VALID_KEYS = [
  'auxiliary',
  'boot',
  'definition',
  'helper_verb', // être/avoir
  'impersonal',
  'infinitive',
  'language',
  'participe',
  'present_participle',
  'préposition',
  'reflexive',
  'stems',
  'translations',
  'variations',
];

const ALL_FRENCH_STEMS = [
  'futur',
  'present-2p',
  'subj-1',
  'subj-1pl',
  'imperitive',
  'simple-past'
] as const;
export type FrenchStem = typeof ALL_FRENCH_STEMS[number];

export enum FrenchTenses {
  conditional = 'conditional',
  futur = 'futur', // futre
  imparfait = 'imparfait', // past
  imperitif = 'imperitif',
  présent = 'présent', // present
  simple = 'simple', // past - story, history
  subjunctif = 'subjunctif',
}

export type FrenchVerbVariation = {
  [key in FrenchTenses]?: { [key in FrenchPronounCode]: string };
} & {
  auxiliary?: boolean;
  definition?: string;
  helper_verb: string;
  infinitive: string;
  impersonal?: boolean;
  participe: string;
  préposition?: string;
  present_participe: string;
  translations: TranslationSet;
};

export type FrenchIrregularSet = Record<FrenchPronounCode, string>;
export type FrenchIrregularObject = {
  // [key in FrenchIrregularKeys]?: FrenchIrregularSet;
  [FrenchTenses.imparfait]: Record<FrenchPronounCode, string>;
};

export interface FrenchVerb extends LanguageVerbBase {
  impersonal: boolean;
  infinitive: string;
  irregular?: FrenchIrregularObject;
  stems?: { [key in FrenchStem]?: string };
  strong?: boolean;
  translations: TranslationSet;
  variations?: Array<Partial<FrenchVerb> | { definition: string }>;
  weakEndings?: boolean;
}

export const isFrenchVerb = (x: object): x is FrenchVerb => {
  let isValid = true;

  if ('language' in x && x.language !== 'fr') {
    return false;
  }

  return isValid;
}
