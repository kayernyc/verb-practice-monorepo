import { createStandardConjugation } from "@models/french/createStandardConjugation";
import { modifyMirtirVerbs } from "@models/french/hydrationFunctions/mirtirVerbs";
import { dormirReturnObject, partirReturnObject, sentirReturnObject } from "@models/french/spec_constants/regularVerbs2";

describe('modifyMirtirVerbs', () => {
  it('conjugates partir correctly', () => {
    const sourceVerb = createStandardConjugation('partir', 'être');
    const result = modifyMirtirVerbs(sourceVerb);

    expect(result).toStrictEqual(partirReturnObject);
  });

  it('conjugates partir correctly', () => {
    const sourceVerb = createStandardConjugation('dormir');
    const result = modifyMirtirVerbs(sourceVerb);

    expect(result).toStrictEqual(dormirReturnObject);
  });

  it('conjugates sentir correctly', () => {
    const sourceVerb = createStandardConjugation('sentir');
    const result = modifyMirtirVerbs(sourceVerb);

    expect(result).toStrictEqual(sentirReturnObject);
  });
});
