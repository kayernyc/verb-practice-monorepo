import { duEsConjugation } from './hydrateDuEsConjugation';

describe('hydrate irregular duEs creates correct du and es for präsens', () => {
  it('creates correct duEs for haben', () => {
    const result = duEsConjugation('ha', {
      1033: 'habe',
      1041: 'haben',
      1098: 'habst',
      1106: 'habt',
      1548: 'habt',
    });

    expect(result).toEqual(['hast', 'hat']);
  });

  it('creates correct duEs for sterben', () => {
    const result = duEsConjugation('i', {
      1033: 'sterbe',
      1041: 'sterben',
      1098: 'sterbst',
      1106: 'sterbt',
      1548: 'sterbt',
    });

    expect(result).toEqual(['stirbst', 'stirbt']);
  });

  it('creates correct duEs for nehmen', () => {
    const result = duEsConjugation('imm', {
      1033: 'nehme',
      1041: 'nehmen',
      1098: 'nehmst',
      1106: 'nehmt',
      1548: 'nehmt',
    });

    expect(result).toEqual(['nimmst', 'nimmt']);
  });

  it('creates correct duEs for fakenehmen', () => {
    const result = duEsConjugation('t', {
      1033: 'nehme',
      1041: 'nehmen',
      1098: 'nehmst',
      1106: 'nehmt',
      1548: 'nehmt',
    });

    expect(result).toEqual(['test', 'tet']);
  });

  it('creates correct duEs for stehlen', () => {
    const result = duEsConjugation('ie', {
      1033: 'stehle',
      1041: 'stehlen',
      1098: 'stehlst',
      1106: 'stehlt',
      1548: 'stehlt',
    });

    expect(result).toEqual(['stiehlst', 'stiehlt']);
  });
});
