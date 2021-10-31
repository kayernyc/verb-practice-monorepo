import partizipConjugation from './partizipHydration';
import generateStems from './generateStems';
import { GermanVerb } from '@german/germanTypes';

describe('partizipConjugation handles irregulars', () => {
  it('conjugates schwimmen partizip correctly', () => {
    const config = { "drop": false, "hilfsverb": "sein", "infinitive": "schwimmen", "languages": { "en": "to swim" }, "stems": { "partizip": "o", "präteritum": "a" }, "strong": true };
    const stem = generateStems(config);

    const partizip = partizipConjugation(stem, "o", "schwimmen")
    expect(partizip).toEqual('geschwommen');
  });
})