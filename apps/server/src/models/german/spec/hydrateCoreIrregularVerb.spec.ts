import { hydrateVerb } from '@german/hydrateGermanVerb';

import {
  habenGermanVerb,
  habenReturnObject,
  seinGermanVerb,
  seinReturnObject,
  werdenGermanVerb,
  werdenReturnObject,
} from './specConstants';

describe('Haben verb conjugates correctly', () => {
  it('Haben conjugates correctly from config', () => {
    const result = hydrateVerb(habenGermanVerb);

    expect(result).toStrictEqual(habenReturnObject);
  });
});

describe('Sein verb conjugates correctly', () => {
  it('Sein conjugates correctly from config', () => {
    const result = hydrateVerb(seinGermanVerb);

    expect(result).toStrictEqual(seinReturnObject);
  });
});

describe('Werden verb conjugates correctly', () => {
  it('Werden conjugates correctly from config', () => {
    const result = hydrateVerb(werdenGermanVerb);

    expect(result).toStrictEqual(werdenReturnObject);
  });
});
