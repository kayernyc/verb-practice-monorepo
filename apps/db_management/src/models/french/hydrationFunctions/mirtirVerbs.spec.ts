import { createStandardConjugation } from "@models/french/createStandardConjugation";
import { mirtirVerbs } from "@models/french/hydrationFunctions/mirtirVerbs";
import { dormirReturnObject, partirReturnObject, sentirReturnObject } from "@models/french/spec_constants/regularVerbs2";

describe('mirtir', () => {
  it('conjugates partir correctly', () => {
    const sourceVerb = createStandardConjugation('partir', 'être');
    const result = mirtirVerbs(sourceVerb);

    expect(result).toStrictEqual(partirReturnObject);
  });

  it('conjugates partir correctly', () => {
    const sourceVerb = createStandardConjugation('dormir');
    const result = mirtirVerbs(sourceVerb);

    expect(result).toStrictEqual(dormirReturnObject);
  });

  it('conjugates sentir correctly', () => {
    const sourceVerb = createStandardConjugation('sentir');
    const result = mirtirVerbs(sourceVerb);

    expect(result).toStrictEqual(sentirReturnObject);
  });
});
