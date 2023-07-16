import { createStandardConjugation } from "@models/french/createStandardConjugation";
import { enirVerbs } from "@models/french/hydrationFunctions/enirVerbs";
import { tenirReturnObject, venirReturnObject } from "@models/french/spec_constants/regularVerbs2";

describe('enir', () => {
  it('conjugates venir correctly', () => {
    const sourceVerb = createStandardConjugation('venir', 'être');
    const result = enirVerbs(sourceVerb);

    expect(result).toStrictEqual(venirReturnObject);
  });

  it('conjugates tenir correctly', () => {
    const sourceVerb = createStandardConjugation('tenir');
    const result = enirVerbs(sourceVerb);

    expect(result).toStrictEqual(tenirReturnObject);
  });

});