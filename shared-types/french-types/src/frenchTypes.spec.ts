import { LanguageMap, LanguageVerbBase } from 'global-types';
import { isFrenchVerb } from './frenchTypes';

describe('frenchTypes', () => {
  it('passes a correct, simple object.', () => {
    const testRecord: LanguageVerbBase = {
      language: LanguageMap.fr,
      translations: { [LanguageMap.en]: ['fade out', 'dim (lights)'] },
      infinitive: 'parler',
    };

    const frenchVerb = isFrenchVerb(testRecord);
    expect(frenchVerb).toBeTruthy();
  });

  it('fails an object in the wrong language, simple object.', () => {
    const testRecord: LanguageVerbBase = {
      language: LanguageMap.de,
      translations: { [LanguageMap.en]: ['fade out', 'dim (lights)'] },
      infinitive: 'parler',
    };

    const frenchVerb = isFrenchVerb(testRecord);
    expect(frenchVerb).toBeFalsy();
  });

  it('passes an object with correct keys', () => {
    const testRecord = {
      language: LanguageMap.fr,
      translations: { [LanguageMap.en]: ['fade out', 'dim (lights)'] },
      infinitive: 'parler',
      definition: 'speak'
    };

    const frenchVerb = isFrenchVerb(testRecord);
    expect(frenchVerb).toBeTruthy();
  });

  it('passes a complex object with correct keys', () => {
    const testRecord = {
      language: LanguageMap.fr,
      translations: { [LanguageMap.en]: ['serve as', 'act as'] },
      infinitive: 'servir',
      definition: 'serve',
      irregular: {
        présent: {
          je: 'sers',
          tu: 'sers',
          il: 'sert',
        }
      },
      reflexive: true
    };

    const frenchVerb = isFrenchVerb(testRecord);
    expect(frenchVerb).toBeTruthy();
  });

  it('passes an complex object with correct keys', () => {
    const testRecord = {
      language: LanguageMap.fr,
      translations: { [LanguageMap.en]: ['serve as', 'act as'] },
      infinitive: 'pluvoir',
      definition: 'rain',
      impersonal: true
    };

    const frenchVerb = isFrenchVerb(testRecord);
    expect(frenchVerb).toBeTruthy();
  });
});
