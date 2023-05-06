import { LanguageMap, LanguageVerbBase } from "global-types";
import { isEnglishVerb} from './englishTypes';

describe('englishTypes', () => {
  it('passes a correct, simple object.', () => {
    const testRecord: LanguageVerbBase = {
      language: LanguageMap.en,
      translations: { [LanguageMap.de]: [ 'fade out', 'dim (lights)'] },
      infinitive:'abcdef'
    };

    const germanVerb = isEnglishVerb(testRecord);
    expect(germanVerb).toBeTruthy();
  });

  it('does not pass an incorrect, simple object.', () => {
    const testRecord: LanguageVerbBase = {
      language: LanguageMap.de,
      translations: { [LanguageMap.de]: [ 'fade out', 'dim (lights)'] },
      infinitive:'abcdef'
    };

    const germanVerb = isEnglishVerb(testRecord);
    expect(germanVerb).toBeFalsy();
  });

  it('passes a correct, moderate object.', () => {
    const testRecord = {
      language: LanguageMap.en,
      translations: { [LanguageMap.de]: [ 'fade out', 'dim (lights)'] },
      infinitive:'abcdef',
      irregular: {
        past: 'gone',
      }
    };

    const germanVerb = isEnglishVerb(testRecord);
    expect(germanVerb).toBeTruthy();
  });

  it('does not pass an incorrect, moderate object.', () => {
    const testRecord = {
      language: LanguageMap.de,
      translations: { [LanguageMap.de]: [ 'fade out', 'dim (lights)'] },
      infinitive:'abcdef',
      irregular: {
        past: 'gone',
        foo: 'gegon'
      }
    };

    const germanVerb = isEnglishVerb(testRecord);
    expect(germanVerb).toBeFalsy();
  });
});
