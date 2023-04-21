export type EnglishTenses = 'present' | 'past'

export type EnglishIrregularObject = {
  [key in EnglishTenses]?: string | string[] | { EnglishPronounKeys?: string }
}