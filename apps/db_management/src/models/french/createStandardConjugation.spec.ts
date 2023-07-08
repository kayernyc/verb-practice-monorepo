import { createStandardConjugation } from "@models/french/createStandardConjugation";
import { choisirReturnObject, parlerReturnObject, perdreReturnObject } from "@models/french/spec_constants/regularVerbs";

describe('simple french verb conjugation', () => {
  it('returns parler correctly', () => {
    const result = createStandardConjugation('parler');

    expect(result).toStrictEqual(parlerReturnObject);
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
