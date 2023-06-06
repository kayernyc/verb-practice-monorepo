import { LanguageMap } from 'global-types';
import { processDeRecord } from './processDeRecord';
import {
  bleibenGermanVerb,
  bleibenReturnObject,
  blendenGermanVerb,
  blendenReturnObject,
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
  brennenGermanVerb,
  brennenReturnObject,
  gelingenGermanVerb,
  gelingenReturnObject,
  widersprechenGermanVerb,
  widersprechenReturnObject,
  ähnelnGermanVerb,
  ähnelnReturnObject,
} from './spec_constants/newVerbsSpec';

// TODO: next pass loop through dictionary
describe('processDeRecord matches real conjugations:', () => {
  it('returns brennen correctly', () => {
    const result = processDeRecord(brennenGermanVerb);
    expect(result).toEqual(brennenReturnObject);
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

  it('returns blenden correctly', () => {
    const result = processDeRecord(blendenGermanVerb);
    expect(result).toEqual(blendenReturnObject);
  });
});
