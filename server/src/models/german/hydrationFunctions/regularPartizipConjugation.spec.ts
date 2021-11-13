import regularPartizipConjugation from './regularPartizipConjugation';

describe('Regular Partizip Conjugation', () => {
  it('conjugates the partizip of lernen correctly.', () => {
    const result = regularPartizipConjugation('lernen', 'lern');
    expect(result).toBe('gelernt');
  });

  it('conjugates the partizip of studieren correctly.', () => {
    const result = regularPartizipConjugation('studieren', 'studier');
    expect(result).toBe('studiert');
  });

  it('conjugates the partizip of knien correctly.', () => {
    const result = regularPartizipConjugation('knien', 'knie');
    expect(result).toBe('gekniet');
  });
});