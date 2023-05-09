export enum LanguageMap {
  'en' = 'en',
  'fr' = 'fr',
  'de' = 'de',
}

// CREDIT WHERE CREDIT IS DUE: https://stackoverflow.com/a/66605669
export type Only<T, U> = {
  [P in keyof T]: T[P];
} & {
  [P in keyof U]?: never;
};

export type Either<T, U> = Only<T, U> | Only<U, T>;
