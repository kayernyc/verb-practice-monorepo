import modifiedStem from '../modifiedStem';

describe('modifies stems correctly', () => {
  it('replaces vowel if the irregular stem is only a vowel', () => {
    const result = modifiedStem({ stem: 'blot', irregularStem: 'a' });
    const expected = 'blat';

    expect(result).toEqual(expected);
  });

  it('replaces vowel if the irregular stem is only a vowel', () => {
    const result = modifiedStem({ stem: 'blot', irregularStem: 'aa' });
    const expected = 'blaat';

    expect(result).toEqual(expected);
  });

  it('replaces the first consonant and vowel if the irregular stem is a single consonant and vowel', () => {
    const result = modifiedStem({ stem: 'blot', irregularStem: 'ba' });
    const expected = 'bat';

    expect(result).toEqual(expected);
  });

  it('replaces the first consonants and vowles if the irregular stem is consonants and vowels', () => {
    const result = modifiedStem({ stem: 'blot', irregularStem: 'trae' });
    const expected = 'traet';

    expect(result).toEqual(expected);
  });

  it('replaces the first consonants and vowles and consonants if the irregular stem is consonants and vowels and trailing consonants', () => {
    const result = modifiedStem({ stem: 'blot', irregularStem: 'wrapp' });
    const expected = 'wrapp';

    expect(result).toEqual(expected);
  });
});

// eslint-disable-next-line max-len
// node node_modules/jest/bin/jest.js -i src/models/german/hydrationFunctions/spec/modifiedStem.spec.ts
