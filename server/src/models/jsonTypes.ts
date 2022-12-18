import { GermanVerb, GermanSeparableVerb } from '@german/germanTypes';

export interface GermanVerbDictionary {
  [key: string]: GermanVerb | GermanSeparableVerb;
}

export interface GermanJsonData {
  date: number;
  verbs: GermanVerbDictionary;
}

export interface LanguageMap {
  de?: string | string[];
  en?: string | string[];
  fr?: string | string[];
}

// CREDIT WHERE CREDIT IS DUE: https://stackoverflow.com/a/66605669
export type Only<T, U> = {
  [P in keyof T]: T[P];
} & {
    [P in keyof U]?: never;
  };

export type Either<T, U> = Only<T, U> | Only<U, T>;
