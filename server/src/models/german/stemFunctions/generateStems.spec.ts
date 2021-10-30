import generateStems from "./generateStems";
import { GermanVerb } from '../germanTypes';

describe('generateStems creates the correct stem', () => {
  it('removes the ending of fallen correctly', () => {
    const config: GermanVerb = { "drop": false, "strong": true, "hilfsverb": "sein", "infinitive": "fallen", "languages": { "en": "to fall" }, "stems": { "duEs": "ä", "präteritum": "iel", "k2präsens": "iel" } };
    const expected = 'fall';

    expect(generateStems(config)).toEqual(expected);
  });

  it('removes the ending of sammeln correctly', () => {
    const config = { "drop": false, "hilfsverb": "haben", "infinitive": "sammeln", "languages": { "en": "to gather, to collect" }, "strong": false };
    const expected = 'sammel';

    expect(generateStems(config)).toEqual(expected);
  });
});
