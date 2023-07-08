import { FrenchVerbVariation } from "french-types";

export type BaseFrenchVerb = Omit<
  FrenchVerbVariation,
  'translations' | 'infinitive' | 'stems'
>;

