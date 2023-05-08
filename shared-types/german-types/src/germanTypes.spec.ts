import { LanguageMap, LanguageVerbBase } from 'global-types';
import { isGermanVerb } from './germanTypes';

describe('germanTypes', () => {
  it('passes a correct, simple object.', () => {
    const testRecord: LanguageVerbBase = {
      language: LanguageMap.de,
      translations: { [LanguageMap.en]: ['fade out', 'dim (lights)'] },
      infinitive: 'ab|blenden',
    };

    const germanVerb = isGermanVerb(testRecord);
    expect(germanVerb).toBeTruthy();
  });

  // it('passes haben.', () => {
  //   const testRecord: LanguageVerbBase = {
  //     language: LanguageMap.de,
  //     translations: { [LanguageMap.en]: [ 'fade out', 'dim (lights)'] },
  //     infinitive:'haben'
  //   };

  //   const germanVerb = isGermanVerb(testRecord);
  //   expect(germanVerb).toBeTruthy();
  // });

  it('does not pass an incorrect, simple object.', () => {
    const testRecordWrong: LanguageVerbBase = {
      language: LanguageMap.fr,
      translations: { [LanguageMap.de]: ['fade out', 'dim (lights)'] },
      infinitive: 'parler',
    };

    const germanVerb = isGermanVerb(testRecordWrong);
    expect(germanVerb).toBeFalsy();
  });

  it('does not pass an incorrect, simple object.', () => {
    const testRecordWrong: LanguageVerbBase = {
      language: LanguageMap.fr,
      translations: { [LanguageMap.de]: ['fade out', 'dim (lights)'] },
      infinitive: 'parler',
    };

    const germanVerb = isGermanVerb(testRecordWrong);
    expect(germanVerb).toBeFalsy();
  });

  it('does not pass an incorrect, moderate object.', () => {
    const testRecordModWrong = {
      language: LanguageMap.de,
      irregular: {
        futur: {
          ich: 'arterai',
        },
      },
      translations: { [LanguageMap.de]: ['fade out', 'dim (lights)'] },
      infinitive: 'parler',
    };

    const germanVerb = isGermanVerb(testRecordModWrong);
    expect(germanVerb).toBeFalsy();
  });

  it('passes a correct, moderately complicated object.', () => {
    const testRecordModWrong = {
      language: LanguageMap.de,
      irregular: {
        präsens: {
          ich: 'arterai',
        },
      },
      translations: { [LanguageMap.de]: ['fade out', 'dim (lights)'] },
      infinitive: 'parler',
    };

    const germanVerb = isGermanVerb(testRecordModWrong);
    expect(germanVerb).toBeTruthy();
  });

  it('passes a correct, moderately complicated object.', () => {
    const testRecordModWrong = {
      language: LanguageMap.de,
      irregular: {
        präsens: {
          rrr: 'arterai',
        },
      },
      translations: { [LanguageMap.de]: ['fade out', 'dim (lights)'] },
      infinitive: 'parler',
    };

    const germanVerb = isGermanVerb(testRecordModWrong);
    expect(germanVerb).toBeFalsy();
  });

  it('passes a correct, moderately more complicated object.', () => {
    const testRecordModIrr = {
      language: LanguageMap.de,
      irregular: {
        präsens: {
          ich: 'arterai',
        },
      },
      translations: { [LanguageMap.de]: ['fade out', 'dim (lights)'] },
      infinitive: 'parler',
      stems: {
        duEs: 'bob',
      },
    };

    const germanVerb = isGermanVerb(testRecordModIrr);
    expect(germanVerb).toBeTruthy();
  });

  it('passes a correct stem object.', () => {
    const testRecordStemCorrect = {
      language: LanguageMap.de,
      translations: { [LanguageMap.de]: ['fade out', 'dim (lights)'] },
      infinitive: 'parler',
      stems: {
        konjunktiv: 'bobbo',
      },
    };

    const germanVerb = isGermanVerb(testRecordStemCorrect);
    expect(germanVerb).toBeTruthy();
  });

  it('does not pass an incorrect stem object.', () => {
    const testRecordStemCorrect = {
      language: LanguageMap.de,
      translations: { [LanguageMap.de]: ['fade out', 'dim (lights)'] },
      infinitive: 'parler',
      stems: {
        konjun: 'bobbo',
      },
    };

    const germanVerb = isGermanVerb(testRecordStemCorrect);
    expect(germanVerb).toBeFalsy();
  });
});
