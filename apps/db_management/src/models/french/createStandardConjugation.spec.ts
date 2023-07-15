import { createStandardConjugation } from "@models/french/createStandardConjugation";
import { bougerReturnObject, choisirReturnObject, copierReturnObject, effacerReturnObject, parlerReturnObject, perdreReturnObject } from "@models/french/spec_constants/regularVerbs";

describe('simple french verb conjugation', () => {
  it('returns parler correctly', () => {
    const result = createStandardConjugation('parler');

    expect(result).toStrictEqual(parlerReturnObject);
  });

  it('returns copier correctly', () => {
    const result = createStandardConjugation('copier');

    expect(result).toStrictEqual(copierReturnObject);
  });

  it('returns effacer correctly', () => {
    const result = createStandardConjugation('effacer');

    expect(result).toStrictEqual(effacerReturnObject);
  });

  it('returns bouger correctly', () => {
    const result = createStandardConjugation('bouger');

    expect(result).toStrictEqual(bougerReturnObject);
  });

  it('returns choisir correctly', () => {
    const result = createStandardConjugation('choisir');

    expect(result).toStrictEqual(choisirReturnObject);
  });

  it('returns perdre correctly', () => {
    const result = createStandardConjugation('perdre');

    expect(result).toStrictEqual(perdreReturnObject);
  });

  it('rejects a malformed infinitive', () => {
    expect(() => {
      createStandardConjugation('perdru')
    }).toThrow();
  });
});
