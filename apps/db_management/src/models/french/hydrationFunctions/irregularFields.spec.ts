import { createStandardConjugation } from "@models/french/createStandardConjugation";
import { irregularFields } from "./irregularFields";
import { FrenchPronounKeys, FrenchTenses } from "french-types";
import { IrregularFields } from "@models/french/types/hydrationTypes";
import { rompreReturnObject } from "@models/french/spec_constants/irregurlarVerbs";

describe(('irregularFields'), () => {
  it('applies the irregularity in rompre correctly', () => {
    const sourceVerb = createStandardConjugation('rompre');
    const irregularFieldObject: IrregularFields = {
      [FrenchTenses.présent.valueOf()]: {
        [FrenchPronounKeys.il]: 'rompt',
      },
    }

    const result = irregularFields(sourceVerb, irregularFieldObject)
    expect(result).toStrictEqual(rompreReturnObject);
  });
});
