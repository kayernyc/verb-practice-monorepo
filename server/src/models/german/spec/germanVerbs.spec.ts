import fs from 'fs';
import { createVerb, DataObj, germanVerbData } from '../germanBuildJsonFromYml';

jest.mock('fs');
const mockFs = fs as jest.Mocked<typeof fs>;

jest
  .useFakeTimers()
  .setSystemTime(new Date('2020-01-01'));

describe('germanVerbData', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('reads files', () => {
    // research how to mock yaml
    mockFs.readFileSync.mockReturnValue(
      /* eslint-disable comma-dangle */
      `date: 16

haben:
  translations:
    en: to have a test
  tags:
    - hilfsverb
  strong:
  weak endings: true
  stems:
    präsens du/es: ha
    präteritum: t
    partizip: b
      `
      /* eslint-enable comma-dangle */
    );
    const result = germanVerbData();
    const expected = {
      date: 1577836800000,
      verbs: {
        haben: {
          language: 'de', drop: false, hilfsverb: 'haben', infinitive: 'haben', translations: { en: 'to have a test' }, stems: { duEs: 'ha', partizip: 'b', präteritum: 't' }, strong: true, weakEndings: true,
        },
      },
    };
    expect(result).toEqual(expected);
  });
});

describe('createVerb', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('populates sein correctly', () => {
    const dataObj: DataObj = {
      translations:
        { en: 'to be' },
      tags: ['hilfsverb'],
      strong: true,
      hilfsverb: 'sein',
      partizip: 'gewesen',
      stems: { präteritum: 'war' },
      irregular: {
        präsens: {
          ich: 'bin',
          du: 'bist',
          es: 'ist',
          wir: 'sind',
          ihr: 'seid',
        },
      },
    };

    const result = createVerb('sein', dataObj);
    const expected = {
      language: 'de',
      drop: false,
      hilfsverb: 'sein',
      infinitive: 'sein',
      translations: { en: 'to be' },
      stems: { präteritum: 'war' },
      strong: true,
      irregular: {
        präsens: {
          1033: 'bin',
          1041: 'sind',
          1098: 'bist',
          1106: 'seid',
          1548: 'ist',
        },
      },
      partizip: 'gewesen',
    };
    expect(result).toEqual(expected);
  });

  it('populates fallen correctly', () => {
    const dataObj: DataObj = {
      translations:
        { en: 'to fall' },
      strong: true,
      hilfsverb: 'sein',
      stems: { 'präsens du/es': 'ä', k2präsens: 'iel' },
    };
    const result = createVerb('fallen', dataObj);
    const expected = {
      language: 'de',
      drop: false,
      hilfsverb: 'sein',
      infinitive: 'fallen',
      translations: { en: 'to fall' },
      stems: {
        duEs: 'ä',
        k2präsens: 'iel',
      },
      strong: true,
    };
    expect(result).toEqual(expected);
  });

  it('populates schwimmen correctly', () => {
    const dataObj: DataObj = {
      translations:
        { en: 'to swim' },
      hilfsverb: 'sein',
      strong: true,
      stems: { partizip: 'o', präteritum: 'a' },
    };
    const result = createVerb('schwimmen', dataObj);
    const expected = {
      language: 'de',
      drop: false,
      hilfsverb: 'sein',
      infinitive: 'schwimmen',
      translations: { en: 'to swim' },
      stems: {
        partizip: 'o',
        präteritum: 'a',
      },
      strong: true,
    };
    expect(result).toEqual(expected);
  });

  it('populates beraten correctly', () => {
    const dataObj: DataObj = { translations: { en: 'to advise, to discuss' } };
    const result = createVerb('beraten', dataObj);
    const expected = {
      language: 'de',
      drop: false,
      hilfsverb: 'haben',
      infinitive: 'beraten',
      translations: {
        en: 'to advise, to discuss',
      },
    };
    expect(result).toEqual(expected);
  });
});
