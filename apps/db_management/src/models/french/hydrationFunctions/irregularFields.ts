import { IrregularFields } from "@models/french/types/hydrationTypes";
import { FrenchBaseVerbConjugation, FrenchPronounCode, FrenchTenses } from "french-types";

type PronounRecord = { [key in FrenchPronounCode]: string | undefined; }

export const irregularFields = (verb: FrenchBaseVerbConjugation, irregularFields: IrregularFields): FrenchBaseVerbConjugation => {

  Object.entries(irregularFields).forEach(([tense, value]: [string, PronounRecord]) => {
    Object.entries(value).forEach(([pronoun, word]: [string, string | undefined]) => {
      if (tense !== undefined && pronoun !== undefined && verb[tense as FrenchTenses] !== undefined) {
        verb[tense][pronoun] = word;
      }
    })

  });

  return verb;
}
