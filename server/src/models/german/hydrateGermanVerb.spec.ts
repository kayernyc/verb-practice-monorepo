import { GermanStems, GermanVerb } from "./germanTypes";
import { hydrateVerb } from "./hydrateGermanVerb";

describe('Weak verb conjugates correctly', () => {
  const expected = { "partizip": "schaut", "präsens": { "ich": "schaue", "du": "schaust", "es": "schaut", "wir": "schauen", "ihr": "schaut" }, "präteritum": { "ich": "schaute", "du": "schautest", "es": "schaute", "wir": "schauten", "ihr": "schautet" }, "konjunktiv": { "ich": "schaue", "du": "schauest", "es": "schaue", "wir": "schauen", "ihr": "schauet" } };
  const config: GermanVerb = { "drop": false, "hilfsverb": "haben", "infinitive": "schauen", "languages": { "en": "to look, to see" } };

  it(`Schauen conjugates correctly from minimal config`, () => {
    const result = hydrateVerb(config);

    expect(result).toStrictEqual(expected);
  });
});

describe('Fallen conjugates correctly', () => {
  const expected = {
    "partizip": "fallen",
    "präsens": {
      "ich": "falle",
      "du": "fällst",
      "es": "fällt",
      "wir": "fallen",
      "ihr": "fallt"
    },
    "präteritum":
    {
      "ich": "fiel",
      "du": "fielst",
      "es": "fiel",
      "wir": "fielen",
      "ihr": "fielt"
    },
    "konjunktiv":
    {
      "ich": "fiele",
      "du": "fielest",
      "es": "fiele",
      "wir": "fielen",
      "ihr": "fielet"
    }
  }

  const config: GermanVerb = { "drop": false, "strong": true, "hilfsverb": "sein", "infinitive": "fallen", "languages": { "en": "to fall" }, "stems": { "duEs": "ä", "präteritum": "iel", "k2präsens": "iel" } };
  const result = hydrateVerb(config);

  it(`Fallen conjugates präsens correctly from minimal config`, () => {
    const { präsens: präsensExpect } = expected;
    const { präsens: präsensResult } = result;

    expect(präsensResult).toStrictEqual(präsensExpect);
  });

  it(`Fallen conjugates präsens correctly from minimal config`, () => {
    const { präteritum: präteritumExpect } = expected;
    const { präteritum: präteritumResult } = result;

    expect(präteritumResult).toStrictEqual(präteritumExpect);
  });

  it(`Fallen conjugates konjunktiv correctly from minimal config`, () => {
    const { konjunktiv: konjunktivExpect } = expected;
    const { konjunktiv: konjunktivResult } = result;

    expect(konjunktivResult).toStrictEqual(konjunktivExpect);
  });

  it(`Fallen conjugates correctly from minimal config`, () => {
    expect(result).toStrictEqual(expected);
  });
});