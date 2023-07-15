import { erConjugation } from "@models/french/createStandardErConjugation";
import { irConjugation } from "@models/french/createStandardIrConjugation";
import { reConjugation } from "@models/french/createStandardReConjugation";
import { BaseFrenchVerb } from "@models/french/frenchTypes";

type ConjugationFunction = (infinitive: string, stem: string) => BaseFrenchVerb;

export const createStandardConjugation = (infinitive: string): BaseFrenchVerb => {
  const ending = infinitive.slice(-2);
  const stem = infinitive.slice(0, -2)

  const strategy: Record<string, ConjugationFunction> = {
    er: erConjugation,
    ir: irConjugation,
    re: reConjugation,
  }

  if (ending in strategy) {
    return strategy[ending](infinitive, stem)
  }

  throw Error(`${infinitive} does not fit French pattern.`)
}