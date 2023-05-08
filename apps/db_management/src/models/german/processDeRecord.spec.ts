import { LanguageMap, LanguageVerbBase } from 'global-types';
import { processDeRecord } from './processDeRecord';

describe('processDeRecord', () => {
  const testObject: LanguageVerbBase = {
    infinitive: 'stecken',
    language: LanguageMap.de,
    translations: {
      en: ['stick', 'put', 'plug', 'thrust'],
    },
  };

  const expected = {
    hilfsverb: 'haben',
    infinitive: 'stecken',
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
    language: 'de',
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
  };

  it('returns a standard weak verb', () => {
    const result = processDeRecord(testObject);
    expect(result).toEqual(expected);
  });

  it('returns a verb with a custom partizip', () => {
    const p_testObject = { ...testObject, partizip: 'bobby' };
    const p_expected = { ...expected, partizip: 'bobby' };
    const result = processDeRecord(p_testObject);
    expect(result).toEqual(p_expected);
  });

  it('returns a verb with custom du/es', () => {
    const de_testObject = { ...testObject, stems: { duEs: 'ha' } };
    const de_expected = { ...expected };
    const result = processDeRecord(de_testObject);
    expect(result).toEqual(de_expected);
  });
});
