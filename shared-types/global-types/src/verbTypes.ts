import { LanguageMap } from './jsonTypes.ts';

export interface LanguageVerbBase {
  language: LanguageMap;
  infinitive: string;
  translations?: {
    [key in LanguageMap]?: string[] | string;
  };
}

export interface LanguageVerbCandidate extends LanguageVerbBase {
  [key: string]: unknown;
}

export type TranslationSet = {
  [key in LanguageMap]?: string[] | string;
};
