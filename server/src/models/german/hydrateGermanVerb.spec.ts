import { GermanVerb } from "./germanTypes";
import { hydrateVerb } from "./hydrateGermanVerb";

describe('Weak verb conjugates correctly', () => {
  it(`Schauen conjugates correctly from minimal config`, () => {
    const expected = { "partizip": "schaut", "präsens": { "ich": "schaue", "du": "schaust", "es": "schaut", "wir": "schauen", "ihr": "schau" }, "präteritum": { "ich": "schaute", "du": "schautest", "es": "schaute", "wir": "schauten", "ihr": "schautet" }, "konjunktiv": { "ich": "schaue", "du": "schauest", "es": "schaue", "wir": "schauen", "ihr": "schauet" } };

    const config: GermanVerb = { "drop": false, "hilfsverb": "haben", "infinitive": "schauen", "languages": { "en": "to look, to see" } };

    const result = hydrateVerb(config);

    expect(result).toStrictEqual(expected);
  })
});