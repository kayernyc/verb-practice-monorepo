import hydrateIrregularStems from '../hydrateIrregularStems';

import {
  seinGermanVerb,
  seinReturnObject,
  seinPräteritumExpected,
  habenGermanVerb,
  habenReturnObject,
  habenPräteritumExpected,
  werdenGermanVerb,
  werdenReturnObject,
  werdenPräteritumExpected,
} from '../../spec/specConstants';

describe('hydrateIrregularStems creates correct präteritum stem objects', () => {
  it('creates correct partizip for sein', () => {
    const result = hydrateIrregularStems({
      infinitiveStem: 'war',
      returnObject: seinReturnObject,
      verbConfiguration: seinGermanVerb,
    });
    const präteritumResult = result.präteritum || {};
    expect(präteritumResult).toEqual(seinPräteritumExpected);
  });

  it('creates correct partizip for haben', () => {
    const result = hydrateIrregularStems({
      infinitiveStem: 'hab',
      returnObject: habenReturnObject,
      verbConfiguration: habenGermanVerb,
    });
    const präteritumResult = result.präteritum || {};
    expect(präteritumResult).toEqual(habenPräteritumExpected);
  });

  it('creates correct partizip for werden', () => {
    const result = hydrateIrregularStems({
      infinitiveStem: 'werd',
      returnObject: werdenReturnObject,
      verbConfiguration: werdenGermanVerb,
    });
    const präteritumResult = result.präteritum || {};

    expect(präteritumResult).toEqual(werdenPräteritumExpected);
  });
});
