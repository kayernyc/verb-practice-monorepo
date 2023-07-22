import { boireReturnObject } from '@models/french/spec_constants/irregurlarVerbs';
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
})