import { createVerb, DataObj } from './germanVerbs';

describe('createVerb', () => {
  it('populates sein correctly', () => {
    const dataObj: DataObj = {
      en: 'to be',
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
      drop: false,
      hilfsverb: 'sein',
      infinitive: 'sein',
      languages: { en: 'to be' },
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
      en: 'to fall',
      strong: true,
      hilfsverb: 'sein',
      stems: { 'präsens du/es': 'ä', k2präsens: 'iel' },
    };
    const result = createVerb('fallen', dataObj);
    const expected = {
      drop: false,
      hilfsverb: 'sein',
      infinitive: 'fallen',
      languages: { en: 'to fall' },
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
      en: 'to swim',
      hilfsverb: 'sein',
      strong: true,
      stems: { partizip: 'o', präteritum: 'a' },
    };
    const result = createVerb('schwimmen', dataObj);
    const expected = {
      drop: false,
      hilfsverb: 'sein',
      infinitive: 'schwimmen',
      languages: { en: 'to swim' },
      stems: {
        partizip: 'o',
        präteritum: 'a',
      },
      strong: true,
    };
    expect(result).toEqual(expected);
  });

  it('populates beraten correctly', () => {
    const dataObj: DataObj = { en: 'to advise, to discuss' };
    const result = createVerb('beraten', dataObj);
    const expected = {
      drop: false,
      hilfsverb: 'haben',
      infinitive: 'beraten',
      languages: {
        en: 'to advise, to discuss',
      },
    };
    expect(result).toEqual(expected);
  });
});
