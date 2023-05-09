import { LanguageMap, LanguageVerbBase } from 'global-types';
import { processDeRecord } from './processDeRecord';
import { GermanVerbHydrated } from 'german-types';

describe('processDeRecord', () => {
  let testObject: LanguageVerbBase;
  let expected: GermanVerbHydrated;

  beforeEach(() => {
    testObject = {
      infinitive: 'stecken',
      language: LanguageMap.de,
      translations: {
        en: ['stick', 'put', 'plug', 'thrust'],
      },
    };

    expected = {
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
      language: LanguageMap.de,
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
  });

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
    de_expected.präsens![1098] = 'stickst';
    de_expected.präsens![1548] = 'stickt';
    const result = processDeRecord(de_testObject);
    expect(result).toEqual(de_expected);
  });

  it('returns a verb with custom du/es v/c combo', () => {
    const de_testObject = { ...testObject, stems: { duEs: 'im' } };
    const de_expected = { ...expected };
    de_expected.präsens![1098] = 'stimst';
    de_expected.präsens![1548] = 'stimt';
    const result = processDeRecord(de_testObject);
    expect(result).toEqual(de_expected);
  });

  it('returns a verb with custom du/es c/v combo', () => {
    const de_testObject = { ...testObject, stems: { duEs: 'cha' } };
    const de_expected = { ...expected };
    de_expected.präsens![1098] = 'chast';
    de_expected.präsens![1548] = 'chat';
    const result = processDeRecord(de_testObject);
    expect(result).toEqual(de_expected);
  });

  it('returns a verb with custom simple partizip combo', () => {
    const part1_testObject = { ...testObject, stems: { partizip: 'o' } };
    const part1_expected = { ...expected, partizip: 'gestocken' };
    const result = processDeRecord(part1_testObject);
    expect(result).toEqual(part1_expected);
  });

  it('returns a verb with custom vcc partizip combo', () => {
    const part1_testObject = { ...testObject, stems: { partizip: 'ang' } };
    const part1_expected = { ...expected, partizip: 'gestangcken' };
    const result = processDeRecord(part1_testObject);
    expect(result).toEqual(part1_expected);
  });

  it('returns a verb with custom vcc partizip and präteritum combo', () => {
    const part1_testObject = {
      ...testObject,
      stems: { partizip: 'ang', präteritum: 'ing' },
    };
    const part1_expected = { ...expected, partizip: 'gestangcken' };
    const result = processDeRecord(part1_testObject);
    expect(result).toEqual(part1_expected);
  });

  it('returns a verb with weakendings and präteritum combo', () => {
    const part1_testObject = {
      ...testObject,
      weakEndings: true,
      stems: { präteritum: 'ing' },
    };
    const part1_expected = { ...expected, partizip: 'gestingt' };
    const result = processDeRecord(part1_testObject);
    expect(result).toEqual(part1_expected);
  });
});

describe('processDeRecord matches real conjugations:', () => {
  it('returns brennen correctly', () => {
    const brennen = {
      infinitive: 'brennen',
      language: LanguageMap.de,
      translations: {
        en: ['burn', 'shine', 'distil'],
      },
      weakEndings: true,
      stems: {
        präteritum: 'a',
        k2präsens: 'e',
        partizip: 'a',
      },
    };
    const brennen_expected = {
      hilfsverb: 'haben',
      infinitive: 'brennen',
      language: 'de',
      k2präsens: {
        '1033': 'brennte',
        '1041': 'brennten',
        '1098': 'brenntest',
        '1106': 'brenntet',
        '1548': 'brennte',
      },
      konjunktiv: {
        '1033': 'brenne',
        '1041': 'brennen',
        '1098': 'brennest',
        '1106': 'brennet',
        '1548': 'brenne',
      },
      partizip: 'gebrannt',
      präsens: {
        '1033': 'brenne',
        '1041': 'brennen',
        '1098': 'brennst',
        '1106': 'brennt',
        '1548': 'brennt',
      },
      präteritum: {
        '1033': 'brennte',
        '1041': 'brennten',
        '1098': 'brenntest',
        '1106': 'brenntet',
        '1548': 'brennte',
      },
      translations: {
        en: ['burn', 'shine', 'distil'],
      },
    };
    const result = processDeRecord(brennen);
    expect(result).toEqual(brennen_expected);
  });
});
