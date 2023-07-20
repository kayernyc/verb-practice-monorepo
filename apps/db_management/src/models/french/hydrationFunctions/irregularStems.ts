import { BaseFrenchVerb } from "@models/french/frenchTypes";
import { IrregularStems } from "@models/french/types/hydrationTypes";

export const irregularStems = (verb: BaseFrenchVerb, irregularStems: IrregularStems): BaseFrenchVerb => {
  console.log({ irregularStems });
  return verb;
}