import { createStandardConjugation } from "@models/french/createStandardConjugation";
import { cuireReturnObject, lireReturnObject, suffireReturnObject, écrireReturnObject } from "@models/french/spec_constants/irregurlarVerbs";
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

  it('applies the cuire pattern correctly', () => {
    const result = createStandardConjugation('cuire');

    expect(result).toStrictEqual(cuireReturnObject);
  });

  it('applies the suffire pattern correctly', () => {
    const result = createStandardConjugation('suffire');

    expect(result).toStrictEqual(suffireReturnObject);
  });

  it('applies the lire pattern correctly', () => {
    const result = createStandardConjugation('lire');

    expect(result).toStrictEqual(lireReturnObject);
  });

  it('applies the écrire pattern correctly', () => {
    const result = createStandardConjugation('écrire');

    expect(result).toStrictEqual(écrireReturnObject);
  });

  it('rejects a malformed infinitive', () => {
    expect(() => {
      createStandardConjugation('perdru')
    }).toThrow();
  });
});
