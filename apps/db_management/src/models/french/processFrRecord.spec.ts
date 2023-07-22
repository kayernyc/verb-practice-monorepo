import { avoirReturnObject, boireReturnObject } from '@models/french/spec_constants/irregurlarVerbs';
import { processFrRecord } from './processFrRecord';
import { LanguageMap, LanguageVerbCandidate } from 'global-types';

describe('processFrRecord', () => {
  let testObject: LanguageVerbCandidate;
  it('returns correctly for boire.', () => {
    testObject = {
      infinitive: 'boire',
      language: LanguageMap.fr,
      irregular: {
        participe: 'bu',
        present_participe: "buvant",
        présent: {
          nous: 'buvons',
          vous: 'buvez',
          ils: 'boivent',
        },
        simple: {
          nous: 'bûmes',
          vous: 'bûtes'
        }
      },
      stems: {
        imparfait: 'buv',
        simple: 'bui',
        subjunctif: 'boiv'
      },
      translations: {
        en: 'drink'
      }
    };

    const result = processFrRecord(testObject);

    expect(result).toStrictEqual({ ...boireReturnObject, language: LanguageMap.fr });
  });

  it('returns correctly for avoir.', () => {
    testObject = {
      infinitive: 'avoir',
      language: LanguageMap.fr,
      irregular: {
        participe: 'eu',
        present_participe: "ayant",
        présent: {
          je: 'ai',
          tu: 'as',
          il: 'a',
          nous: 'avons',
          vous: 'avez',
          ils: 'ont',
        },
        subjunctif: {
          il: 'ait',
          nous: 'ayons',
          vous: 'ayez'
        },
        simple: {
          je: 'eus',
          tu: 'eus',
          il: 'eut',
          nous: 'eûmes',
          vous: 'eûtes',
          ils: 'eurent',
        }
      },
      stems: {
        imparfait: 'av',
        futur: 'aur',
        conditional: 'aur',
        subjunctif: 'ai'
      },
      translations: {
        en: 'have'
      }
    };

    const result = processFrRecord(testObject);

    expect(result).toStrictEqual({ ...avoirReturnObject, language: LanguageMap.fr });
  });
})