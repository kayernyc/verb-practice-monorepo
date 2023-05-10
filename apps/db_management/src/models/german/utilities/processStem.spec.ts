import { processStemSubstitution } from './processStemSubstitution';

describe('processStem', () => {
  it('transforms haben prateritum', () => {
    const result = processStemSubstitution({
      regularStem: 'hab',
      irregularStem: 't',
    });
    expect(result).toBe('hat');
  });

  it('transforms werden prateritum', () => {
    const result = processStemSubstitution({
      regularStem: 'werd',
      irregularStem: 'o',
    });
    expect(result).toBe('word');
  });

  it('transforms werorden prateritum', () => {
    const result = processStemSubstitution({
      regularStem: 'werord',
      irregularStem: 'o',
    });
    expect(result).toBe('worord');
  });

  it('transforms mögen prateritum', () => {
    const result = processStemSubstitution({
      regularStem: 'mög',
      irregularStem: 'och',
    });
    expect(result).toBe('moch');
  });

  it('transforms heißen prateritum', () => {
    const result = processStemSubstitution({
      regularStem: 'heiß',
      irregularStem: 'ie',
    });
    expect(result).toBe('hieß');
  });

  it('transforms gehen prateritum', () => {
    const result = processStemSubstitution({
      regularStem: 'geh',
      irregularStem: 'ang',
    });
    expect(result).toBe('gang');
  });

  it('transforms essen prateritum', () => {
    const result = processStemSubstitution({
      regularStem: 'ess',
      irregularStem: 'gess',
    });
    expect(result).toBe('gess');
  });
});
