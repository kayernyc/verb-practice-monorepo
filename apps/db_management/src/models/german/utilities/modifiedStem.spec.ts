import { modifiedStem } from './modifiedStem';

describe('modifies stems correctly', () => {
  it('replaces vowel if the irregular stem is only a vowel', () => {
    const result = modifiedStem('blot', 'a');
    const expected = 'blat';

    expect(result).toEqual(expected);
  });

  it('replaces vowel if the irregular stem is only a vowel', () => {
    const result = modifiedStem('blot', 'aa');
    const expected = 'blaat';

    expect(result).toEqual(expected);
  });

  it('replaces the first consonant and vowel if the irregular stem is a single consonant and vowel', () => {
    const result = modifiedStem('blot', 'ba');
    const expected = 'bat';

    expect(result).toEqual(expected);
  });

  it('replaces the first consonants and vowles if the irregular stem is consonants and vowels', () => {
    const result = modifiedStem('blot', 'trae');
    const expected = 'traet';

    expect(result).toEqual(expected);
  });

  it('replaces the first consonants and vowles and consonants if the irregular stem is consonants and vowels and trailing consonants', () => {
    const result = modifiedStem('blot', 'wrapp');
    const expected = 'wrapp';

    expect(result).toEqual(expected);
  });

  it('replaces the second consonants irregular stem is consonants with no vowels', () => {
    const result = modifiedStem('blot', 'p');
    const expected = 'blop';

    expect(result).toEqual(expected);
  });

  it("replaces tail consonant when there's no leading consonent", () => {
    const result = modifiedStem('ot', 'b');
    const expected = 'ob';

    expect(result).toEqual(expected);
  });

  it("replaces vowel and tail consonant when there's no leading consonent", () => {
    const result = modifiedStem('oten', 'ib');
    const expected = 'ib';

    expect(result).toEqual(expected);
  });
});
