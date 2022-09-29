import duEsConjugation from '../hydrateDuEsConjugation';

describe('hydrate irregular duEs creates correct du and es for präsens', () => {
  it('creates correct duEs for haben', () => {
    // this is a semi-processed return object
    const returnObject = {
      hilfsverb: 'haben',
      infinitive: 'haben',
      partizip: 'gehabt',
      präsens: {
        1033: 'habe',
        1041: 'haben',
        1098: 'habst',
        1106: 'habt',
        1548: 'habt',
      },
    };
    const result = duEsConjugation({
      returnObject,
      duEsStem: 'ha',
    });

    expect(result).toEqual(['hast', 'hat']);
  });

  it('creates correct duEs for sterben', () => {
    // this is a semi-processed return object
    const returnObject = {
      hilfsverb: 'haben',
      infinitive: 'sterben',
      partizip: 'gestorben',
      präsens: {
        1033: 'sterbe',
        1041: 'sterben',
        1098: 'sterbst',
        1106: 'sterbt',
        1548: 'sterbt',
      },
    };
    const result = duEsConjugation({
      returnObject,
      duEsStem: 'i',
    });

    expect(result).toEqual(['stirbst', 'stirbt']);
  });

  it('creates correct duEs for nehmen', () => {
    // this is a semi-processed return object
    const returnObject = {
      hilfsverb: 'haben',
      infinitive: 'nehmen',
      partizip: 'genommen',
      präsens: {
        1033: 'nehme',
        1041: 'nehmen',
        1098: 'nehmst',
        1106: 'nehmt',
        1548: 'nehmt',
      },
    };
    const result = duEsConjugation({
      returnObject,
      duEsStem: 'imm',
    });

    expect(result).toEqual(['nimmst', 'nimmt']);
  });

  it('creates correct duEs for fakenehmen', () => {
    // this is a semi-processed return object
    const returnObject = {
      hilfsverb: 'haben',
      infinitive: 'fakenehmen',
      partizip: 'fake',
      präsens: {
        1033: 'nehme',
        1041: 'nehmen',
        1098: 'nehmst',
        1106: 'nehmt',
        1548: 'nehmt',
      },
    };
    const result = duEsConjugation({
      returnObject,
      duEsStem: 't',
    });

    expect(result).toEqual(['test', 'tet']);
  });

  it('creates correct duEs for stehlen', () => {
    // this is a semi-processed return object
    const returnObject = {
      hilfsverb: 'haben',
      infinitive: 'stehlen',
      partizip: 'gestohlen',
      präsens: {
        1033: 'stehle',
        1041: 'stehlen',
        1098: 'stehlst',
        1106: 'stehlt',
        1548: 'stehlt',
      },
    };
    const result = duEsConjugation({
      returnObject,
      duEsStem: 'ie',
    });

    expect(result).toEqual(['stiehlst', 'stiehlt']);
  });

  it('throws if no präsens is present', () => {
    // this is a semi-processed return object
    const returnObject = {
      hilfsverb: 'haben',
      infinitive: 'stohlen',
      partizip: 'gestohlen',
    };

    expect(() => {
      duEsConjugation({ returnObject, duEsStem: 'ie' });
    }).toThrow('NO PRÄSENS');
  });
});

// eslint-disable-next-line max-len
// node node_modules/jest/bin/jest.js -i src/models/german/hydrationFunctions/spec/hydrateDuEsConjugation.spec.ts
