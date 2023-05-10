import { processStem } from './processStem';

describe('processStem', () => {
  it('transforms haben prateritum', () => {
    const result = processStem({ regularStem: 'hab', irregularStem: 't' });
    expect(result).toBe('hat');
  });

  it('transforms werden prateritum', () => {
    const result = processStem({ regularStem: 'werd', irregularStem: 'o' });
    expect(result).toBe('word');
  });

  it('transforms werorden prateritum', () => {
    const result = processStem({ regularStem: 'werord', irregularStem: 'o' });
    expect(result).toBe('worord');
  });

  it('transforms mögen prateritum', () => {
    const result = processStem({ regularStem: 'mög', irregularStem: 'och' });
    expect(result).toBe('moch');
  });

  it('transforms heißen prateritum', () => {
    const result = processStem({ regularStem: 'heiß', irregularStem: 'ie' });
    expect(result).toBe('hieß');
  });

  it('transforms gehen prateritum', () => {
    const result = processStem({ regularStem: 'geh', irregularStem: 'ang' });
    expect(result).toBe('gang');
  });

  it('transforms essen prateritum', () => {
    const result = processStem({ regularStem: 'ess', irregularStem: 'gess' });
    expect(result).toBe('gess');
  });
});
