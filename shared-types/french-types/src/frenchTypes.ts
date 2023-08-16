import { LanguageVerbBase, TranslationSet } from "global-types";
import { FrenchPronounCode } from "src/frenchConstants";

const ALL_FRENCH_VALID_KEYS = [
  'auxiliary',
  'definition',
  'helper_verb', // être/avoir
  'irregular',
  'impersonal',
  'infinitive',
  'language',
  'participe',
  'pattern',
  'present_participle',
  'préposition',
  'reflexive',
  'stems',
  'translations',
  'variations',
];

const ALL_FRENCH_PATTERNS = [
  'aitre',
  'boot',
  'indre',
  'rendre',
  'ttre',
] as const;
export type FrenchPattern = typeof ALL_FRENCH_PATTERNS[number];

export enum FrenchTenses {
  conditional = 'conditional',
  futur = 'futur', // futre
  imparfait = 'imparfait', // past
  // imperitif = 'imperitif',
  présent = 'présent', // present
  simple = 'simple', // past - story, history
  subjunctif = 'subjunctif',
}

export const allFrenchTenses = Object.keys(FrenchTenses);

export type FrenchBaseVerbConjugation = {
  [key in FrenchTenses]: { [key in FrenchPronounCode]: string };
} & {
  definition?: string;
  helper_verb: 'avoir' | 'être';
  impersonal?: boolean;
  infinitive: string;
  participe: string;
  present_participe: string;
  préposition?: string;
  reflexive?: boolean;
}

export type FrenchVerbVariation = {
  [key in FrenchTenses]?: { [key in FrenchPronounCode]: string };
} & {
  definition?: string;
  préposition?: string;
  reflexive: boolean;
  translations: TranslationSet;
};

export type FrenchIrregularSet = Record<FrenchPronounCode, string>;
export type FrenchIrregularObject = {
  [key in FrenchTenses]?: Record<FrenchPronounCode, string>;
} | {
  participe: string;
  present_participle: string;
};

export interface FrenchVerb extends LanguageVerbBase {
  auxiliary?: boolean;
  definition?: string;
  helper_verb: string;
  impersonal: boolean;
  infinitive: string;
  irregular?: FrenchIrregularObject;
  pattern?: FrenchPattern;
  participe: string;
  present_participe: string;
  reflexive: boolean;
  stems: Record<FrenchTenses, string>
  translations: TranslationSet;
  variations?: Array<Partial<FrenchVerb> | { definition: string }>;
  weakEndings?: boolean;
}

export const isFrenchVerb = (x: any): x is FrenchVerb => {
  let isValid = true;

  if ('language' in x && x.language !== 'fr') {
    return false;
  }

  const xKeys = Object.keys(x);
  xKeys.forEach((key: string) => {
    if (!ALL_FRENCH_VALID_KEYS.includes(key)) {
      console.log(`bad key = ${key}`);
      isValid = false;
    }

    // TODO: validate tenses and persons
  });

  return isValid;
}
