import { LanguageMap, LanguageVerbCandidate } from 'global-types';
import { processDeRecord } from './processDeRecord';
import { GermanVerbHydrated } from 'german-types';
import {
  drehenGermanVerb,
  drehenReturnObject,
} from './spec_constants/specConstants';

describe('processDeRecord throws correctly', () => {
  let testObject: LanguageVerbCandidate;

  it('if the language is not German.', () => {
    testObject = {
      infinitive: 'stecken',
      language: LanguageMap.fr,
      translations: {
        en: ['stick', 'put', 'plug', 'thrust'],
      },
      variations: [
        {
          definition: 'test',
          translations: {
            fr: ['preuver'],
            en: ['test'],
          },
          stems: {
            k2präsens: 'ö',
          },
        },
      ],
    };

    expect(() => {
      processDeRecord(testObject);
    }).toThrow();
  });

  it('if the infinitive is not a string.', () => {
    testObject = {
      infinitive: '',
      language: LanguageMap.de,
      translations: {
        en: ['stick', 'put', 'plug', 'thrust'],
      },
      variations: [
        {
          definition: 'test',
          translations: {
            fr: ['preuver'],
            en: ['test'],
          },
          stems: {
            k2präsens: 'ö',
          },
        },
      ],
    };

    expect(() => {
      processDeRecord(testObject);
    }).toThrow();
  });
});

describe('processDeRecord returns regular verbs corretly', () => {
  it('correctly processes drehen', () => {
    const result = processDeRecord(drehenGermanVerb);
    expect(result).toEqual(drehenReturnObject);
  });
});

describe('processDeRecord processes variations.', () => {
  let testObject: LanguageVerbCandidate;
  let expected: GermanVerbHydrated;

  beforeEach(() => {
    testObject = {
      infinitive: 'stecken',
      language: LanguageMap.de,
      translations: {
        en: ['stick', 'put', 'plug', 'thrust'],
      },
      variations: [
        {
          definition: 'test',
          translations: {
            fr: ['preuver'],
            en: ['test'],
          },
          stems: {
            k2präsens: 'ö',
          },
        },
      ],
    };

    expected = {
      language: LanguageMap.de,
      infinitive: 'stecken',
      variations: [
        {
          hilfsverb: 'haben',
          k2präsens: {
            '1033': 'steckte',
            '1041': 'steckten',
            '1098': 'stecktest',
            '1106': 'stecktet',
            '1548': 'steckte',
          },
          konjunktiv: {
            '1033': 'stecke',
            '1041': 'stecken',
            '1098': 'steckest',
            '1106': 'stecket',
            '1548': 'stecke',
          },
          partizip: 'gesteckt',
          präsens: {
            '1033': 'stecke',
            '1041': 'stecken',
            '1098': 'steckst',
            '1106': 'steckt',
            '1548': 'steckt',
          },
          präteritum: {
            '1033': 'steckte',
            '1041': 'steckten',
            '1098': 'stecktest',
            '1106': 'stecktet',
            '1548': 'steckte',
          },
          translations: { en: ['stick', 'put', 'plug', 'thrust'] },
        },
        {
          hilfsverb: 'haben',
          k2präsens: {
            '1033': 'stöcke',
            '1041': 'stöcken',
            '1098': 'stöckest',
            '1106': 'stöcket',
            '1548': 'stöcke',
          },
          konjunktiv: {
            '1033': 'stecke',
            '1041': 'stecken',
            '1098': 'steckest',
            '1106': 'stecket',
            '1548': 'stecke',
          },
          partizip: 'gesteckt',
          präsens: {
            '1033': 'stecke',
            '1041': 'stecken',
            '1098': 'steckst',
            '1106': 'steckt',
            '1548': 'steckt',
          },
          präteritum: {
            '1033': 'steckte',
            '1041': 'steckten',
            '1098': 'stecktest',
            '1106': 'stecktet',
            '1548': 'steckte',
          },
          translations: { en: ['test'], fr: ['preuver'] },
        },
      ],
    };
  });

  it('returns variations on stecken correctly', () => {
    const result = processDeRecord(testObject);
    expect(result).toEqual(expected);
  });
});
