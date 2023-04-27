import { createVerb, createSeparableVerb } from '@german/createGermanVerb';
import { DataObj } from '@german/germanBuildJsonFromYml';

describe('createVerb', () => {
  it('populates sein correctly', () => {
    const dataObj: DataObj = {
      translations: { en: 'to be' },
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
      translations: { en: 'to fall' },
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
      translations: { en: 'to swim' },
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

  it('does not create a full verb from a separable verb', () => {
    const dataObj: DataObj = { translations: { en: 'to wash up' } };
    const result = createVerb('auf|waschen', dataObj);

    expect(result).toBeUndefined();
  });

  it('does create a seperable verb obj from a separable verb with a valid particle', () => {
    const dataObj: DataObj = { translations: { en: 'to wash up' } };
    const result = createSeparableVerb('auf|waschen', dataObj);
    const expected = [
      'aufwaschen',
      {
        base: 'waschen',
        hilfsverb: 'haben',
        language: 'de',
        particle: 'auf',
        translations: { en: 'to wash up' },
      },
    ];

    expect(result).toStrictEqual(expected);
  });

  it('does not create a seperable verb obj from a separable verb with an invalid particle', () => {
    const dataObj: DataObj = { translations: { en: 'to wash up' } };
    const result = createSeparableVerb('emp|waschen', dataObj);

    expect(result).toBeUndefined();
  });
});
