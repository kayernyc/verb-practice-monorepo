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
});
