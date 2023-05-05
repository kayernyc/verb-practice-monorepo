import { LanguageMap, LanguageVerbBase } from "global-types";
import { GermanVerbTypeGuard} from './germanTypes';

describe('germanTypes', () => {
  it('passes a correct, simple object.', () => {
    const testRecord: LanguageVerbBase = {
      language: LanguageMap.de,
      translations: { [LanguageMap.de]: [ 'fade out', 'dim (lights)'] },
      infinitive:'ab|blenden'
    };

    const isGermanVerb = GermanVerbTypeGuard(testRecord);
    expect(isGermanVerb).toBeTruthy();
  });
  
  it('does not pass an incorrect, simple object.', () => {
    const testRecordWrong: LanguageVerbBase = {
      language: LanguageMap.fr,
      translations: { [LanguageMap.de]: [ 'fade out', 'dim (lights)'] },
      infinitive:'parler'
    };
    
    const isGermanVerb = GermanVerbTypeGuard(testRecordWrong);
    expect(isGermanVerb).toBeFalsy();
  });
  
  it('does not pass an incorrect, simple object.', () => {
    const testRecordWrong: LanguageVerbBase = {
      language: LanguageMap.fr,
      translations: { [LanguageMap.de]: [ 'fade out', 'dim (lights)'] },
      infinitive:'parler'
    };
    
    const isGermanVerb = GermanVerbTypeGuard(testRecordWrong);
    expect(isGermanVerb).toBeFalsy();
  });
  
  it('does not pass an incorrect, moderate object.', () => {
    const testRecordModWrong = {
      language: LanguageMap.de,
      irregular: {
        futur: {
          ich: 'arterai'
        }
      },
      translations: { [LanguageMap.de]: [ 'fade out', 'dim (lights)'] },
      infinitive:'parler'
    };
    
    const isGermanVerb = GermanVerbTypeGuard(testRecordModWrong);
    expect(isGermanVerb).toBeFalsy();
  });
  
  it('passes a correct, moderately complicated object.', () => {
    const testRecordModWrong = {
      language: LanguageMap.de,
      irregular: {
        präsens: {
          ich: 'arterai'
        }
      },
      translations: { [LanguageMap.de]: [ 'fade out', 'dim (lights)'] },
      infinitive:'parler'
    };
    
    const isGermanVerb = GermanVerbTypeGuard(testRecordModWrong);
    expect(isGermanVerb).toBeTruthy();
  });

  it('passes a correct, moderately more complicated object.', () => {
    const testRecordModIrr = {
      language: LanguageMap.de,
      irregular: {
        präsens: {
          ich: 'arterai',
        }
      },
      translations: { [LanguageMap.de]: [ 'fade out', 'dim (lights)'] },
      infinitive:'parler',
      stems: {
        duEs: 'bob'
      }
    };
    
    const isGermanVerb = GermanVerbTypeGuard(testRecordModIrr);
    expect(isGermanVerb).toBeTruthy();
  });

  it('passes a correct stem object.', () => {
    const testRecordStemCorrect = {
      language: LanguageMap.de,
      translations: { [LanguageMap.de]: [ 'fade out', 'dim (lights)'] },
      infinitive:'parler',
      stems: {
        konjunktiv: 'bobbo'
      }
    };
    
    const isGermanVerb = GermanVerbTypeGuard(testRecordStemCorrect);
    expect(isGermanVerb).toBeTruthy();
  });

  it('does not pass an incorrect stem object.', () => {
    const testRecordStemCorrect = {
      language: LanguageMap.de,
      translations: { [LanguageMap.de]: [ 'fade out', 'dim (lights)'] },
      infinitive:'parler',
      stems: {
        konjun: 'bobbo'
      }
    };
    
    const isGermanVerb = GermanVerbTypeGuard(testRecordStemCorrect);
    expect(isGermanVerb).toBeFalsy();
  });
});

// TODO: Guarding should be moved to the GERMAN type package.