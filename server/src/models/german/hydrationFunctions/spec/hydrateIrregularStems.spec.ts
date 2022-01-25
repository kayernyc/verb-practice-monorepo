import hydrateIrregularStems from '../hydrateIrregularStems';

import {
  seinGermanVerb,
  seinReturnObject,
  seinPräteritumExpected,
  habenGermanVerb,
  habenReturnObject,
  habenPräteritumExpected,
} from './specConstants';

describe('hydrateIrregularStems creates correct präteritum stem objects', () => {
  it('creates correct partizip for sein', () => {
    const result = hydrateIrregularStems({ infinitiveStem: 'sein', returnObject: seinReturnObject, verbConfiguration: seinGermanVerb });
    const präteritumResult = result.präteritum || {};
    expect(präteritumResult).toEqual(seinPräteritumExpected);
  });

  it('creates correct partizip for haben', () => {
    const result = hydrateIrregularStems({ infinitiveStem: 'hab', returnObject: habenReturnObject, verbConfiguration: habenGermanVerb });
    const präteritumResult = result.präteritum || {};
    expect(präteritumResult).toEqual(habenPräteritumExpected);
  });
});

// eslint-disable-next-line max-len
// node node_modules/jest/bin/jest.js -i src/models/german/hydrationFunctions/spec/hydrateIrregularStems.spec.ts
