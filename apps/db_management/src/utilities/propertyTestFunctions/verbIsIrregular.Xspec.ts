import verbIsIrregular from './verbIsIrregular';
import { GERMAN_IRREGULAR_KEYS } from 'german-types';
import { LanguageMap, LanguageVerbBase } from 'global-types';

describe('verbIsIrregular correctly determines the state of the verb', () => {
  it('flags bilden as not irregular', () => {
    const bildenVerb: LanguageVerbBase = {
      language: LanguageMap.de,
      infinitive: 'bilden',
      translations: { en: 'build' },
    };

    const result = verbIsIrregular(bildenVerb, [...GERMAN_IRREGULAR_KEYS]);
    expect(result).not.toBeTruthy();
  });

  it('flags bilden with string as irregular', () => {
    const bildenVerb = {
      language: LanguageMap.de,
      infinitive: 'bilden',
      translations: { en: 'build' },
      strong: true,
    };

    const result = verbIsIrregular(bildenVerb, [...GERMAN_IRREGULAR_KEYS]);
    expect(result).toBeTruthy();
  });
});
