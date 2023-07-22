import { modifyLlirVerbs } from "@models/french/hydrationFunctions/llirVerbs";
import { couvrirReturnObject, cueillirReturnObject, offrirReturnObject } from "@models/french/spec_constants/regularVerbs2";
import { createStandardConjugation } from "@models/french/createStandardConjugation";

describe('modifyLlirVerbs', () => {

  it('conjugates couvrir correctly', () => {
    const sourceVerb = createStandardConjugation('couvrir');
    const result = modifyLlirVerbs(sourceVerb);

    expect(result).toStrictEqual(couvrirReturnObject);
  });

  it('conjugates cueillir correctly', () => {
    const sourceVerb = createStandardConjugation('cueillir');
    const result = modifyLlirVerbs(sourceVerb);

    expect(result).toStrictEqual(cueillirReturnObject);
  });

  it('conjugates offrir correctly', () => {
    const sourceVerb = createStandardConjugation('offrir');
    const result = modifyLlirVerbs(sourceVerb);

    expect(result).toStrictEqual(offrirReturnObject);
  });
});
