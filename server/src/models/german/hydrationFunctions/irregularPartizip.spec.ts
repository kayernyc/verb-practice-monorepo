import partizipConjugation from './partizipHydration';
import generateStems from './generateStems';

describe('partizipConjugation handles irregulars', () => {
  it('conjugates schwimmen partizip correctly', () => {
    const config = { "drop": false, "hilfsverb": "sein", "infinitive": "schwimmen", "languages": { "en": "to swim" }, "stems": { "partizip": "o", "präteritum": "a" }, "strong": true };
    const stem = generateStems(config);

    const partizip = partizipConjugation(stem, "o", "schwimmen")
    expect(partizip).toEqual('geschwommen');
  });

  it('conjugates brennen partizip correctly', () => {
    const config = { "drop": false, "hilfsverb": "haben", "infinitive": "brennen", "languages": { "en": "to burn, to shine, to distil" }, "strong": true, "stems": { "präteritum": "a", "k2präsens": "e", "partizip": "a" } };
    const stem = generateStems(config);

    const partizip = partizipConjugation(stem, "a", "brennen")
    expect(partizip).toEqual('gebrannt');
  });


})