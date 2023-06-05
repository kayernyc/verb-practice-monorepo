import { LanguageMap } from 'global-types';
import { processDeRecord } from './processDeRecord';
import {
  bleibenGermanVerb,
  bleibenReturnObject,
  fliegenGermanVerb,
  fliegenReturnObject,
  gehenGermanVerb,
  gehenReturnObject,
  habenGermanVerb,
  habenReturnObject,
  könnenGermanVerb,
  könnenReturnObject,
  nehmenGermanVerb,
  nehmenReturnObject,
  seinGermanVerb,
  seinReturnObject,
  werdenGermanVerb,
  werdenReturnObject,
} from './spec_constants/specConstants';
import {
  bedürfenGermanVerb,
  bedürfenReturnObject,
  gelingenGermanVerb,
  gelingenReturnObject,
  widersprechenGermanVerb,
  widersprechenReturnObject,
  ähnelnGermanVerb,
  ähnelnReturnObject,
} from './spec_constants/newVerbsSpec';

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
      infinitive: 'brennen',
      language: LanguageMap.de,
      variations: [
        {
          hilfsverb: 'haben',
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
            '1033': 'brannte',
            '1041': 'brannten',
            '1098': 'branntest',
            '1106': 'branntet',
            '1548': 'brannte',
          },
          translations: {
            en: ['burn', 'shine', 'distil'],
          },
        },
      ],
    };
    const result = processDeRecord(brennen);
    expect(result).toEqual(brennen_expected);
  });

  it('returns haben correctly', () => {
    const result = processDeRecord(habenGermanVerb);
    expect(result).toEqual(habenReturnObject);
  });

  it('returns sein correctly', () => {
    const result = processDeRecord(seinGermanVerb);
    expect(result).toEqual(seinReturnObject);
  });

  it('returns werden correctly', () => {
    const result = processDeRecord(werdenGermanVerb);
    expect(result).toEqual(werdenReturnObject);
  });

  it('returns können correctly', () => {
    const result = processDeRecord(könnenGermanVerb);
    expect(result).toEqual(könnenReturnObject);
  });

  it('returns gehen correctly', () => {
    const result = processDeRecord(gehenGermanVerb);
    expect(result).toEqual(gehenReturnObject);
  });

  it('returns fliegen correctly', () => {
    const result = processDeRecord(fliegenGermanVerb);
    expect(result).toEqual(fliegenReturnObject);
  });

  it('returns bleiben correctly', () => {
    const result = processDeRecord(bleibenGermanVerb);
    expect(result).toEqual(bleibenReturnObject);
  });

  it('returns ähneln correctly', () => {
    const result = processDeRecord(ähnelnGermanVerb);
    expect(result).toEqual(ähnelnReturnObject);
  });

  it('returns bedürfen correctly', () => {
    const result = processDeRecord(bedürfenGermanVerb);
    expect(result).toEqual(bedürfenReturnObject);
  });

  it('returns widersprechen correctly', () => {
    const result = processDeRecord(widersprechenGermanVerb);
    expect(result).toEqual(widersprechenReturnObject);
  });

  it('returns gelingen correctly', () => {
    const result = processDeRecord(gelingenGermanVerb);
    expect(result).toEqual(gelingenReturnObject);
  });

  it('returns nehmen correctly', () => {
    const result = processDeRecord(nehmenGermanVerb);
    expect(result).toEqual(nehmenReturnObject);
  });
});
