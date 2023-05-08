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

  it('returns a verb with custom du/es vowel', () => {
    const de_testObject = { ...testObject, stems: { duEs: 'i' } };
    const de_expected = { ...expected };
    de_expected.präsens[1098] = 'stickst';
    de_expected.präsens[1548] = 'stickt';
    const result = processDeRecord(de_testObject);
    expect(result).toEqual(de_expected);
  });

  it('returns a verb with custom du/es v/c combo', () => {
    const de_testObject = { ...testObject, stems: { duEs: 'im' } };
    const de_expected = { ...expected };
    de_expected.präsens[1098] = 'stimst';
    de_expected.präsens[1548] = 'stimt';
    const result = processDeRecord(de_testObject);
    expect(result).toEqual(de_expected);
  });

  it('returns a verb with custom du/es c/v combo', () => {
    const de_testObject = { ...testObject, stems: { duEs: 'cha' } };
    const de_expected = { ...expected };
    de_expected.präsens[1098] = 'chast';
    de_expected.präsens[1548] = 'chat';
    const result = processDeRecord(de_testObject);
    expect(result).toEqual(de_expected);
  });
});
