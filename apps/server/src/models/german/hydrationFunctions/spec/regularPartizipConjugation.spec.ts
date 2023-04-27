import regularPartizipConjugation from '../regularPartizipConjugation';

describe('Regular Partizip Conjugation', () => {
  it('conjugates the partizip of lernen correctly.', () => {
    const result = regularPartizipConjugation({ infinitive: 'lernen', infinitiveStem: 'lern' });
    expect(result).toBe('gelernt');
  });

  it('conjugates the partizip of studieren correctly.', () => {
    const result = regularPartizipConjugation({
      infinitive: 'studieren',
      infinitiveStem: 'studier',
    });
    expect(result).toBe('studiert');
  });

  it('conjugates the partizip of knien correctly.', () => {
    const result = regularPartizipConjugation({ infinitive: 'knien', infinitiveStem: 'knie' });
    expect(result).toBe('gekniet');
  });
});
