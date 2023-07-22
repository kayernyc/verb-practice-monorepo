import { FrenchBaseVerbConjugation, FrenchPronounKeys } from "french-types";

export const modifyEnirVerbs = (verb: FrenchBaseVerbConjugation): FrenchBaseVerbConjugation => {
  const { infinitive } = verb;
  const returnVerb = { ...verb };

  const stem = infinitive.slice(0, -2);

  const simplePastStemRegex: RegExp = /(e)(n)\b/;
  const simplePastBootStem = stem.replace(simplePastStemRegex, 'i$2');
  const simplePastStem = stem.replace(simplePastStemRegex, 'î$2');

  const presentBootStem = `${infinitive.slice(0, -4)}ien`;

  returnVerb.present_participe = `${stem}ant`;
  returnVerb.participe = `${stem}u`;

  returnVerb.présent = {
    [FrenchPronounKeys.je]: `${presentBootStem}s`,
    [FrenchPronounKeys.tu]: `${presentBootStem}s`,
    [FrenchPronounKeys.il]: `${presentBootStem}t`,
    [FrenchPronounKeys.nous]: `${stem}ons`,
    [FrenchPronounKeys.vous]: `${stem}ez`,
    [FrenchPronounKeys.ils]: `${presentBootStem}nent`,
  }

  returnVerb.subjunctif = {
    [FrenchPronounKeys.je]: `${presentBootStem}ne`,
    [FrenchPronounKeys.tu]: `${presentBootStem}nes`,
    [FrenchPronounKeys.il]: `${presentBootStem}ne`,
    [FrenchPronounKeys.nous]: `${stem}ions`,
    [FrenchPronounKeys.vous]: `${stem}iez`,
    [FrenchPronounKeys.ils]: `${presentBootStem}nent`,
  }

  returnVerb.imparfait = {
    [FrenchPronounKeys.je]: `${stem}ais`,
    [FrenchPronounKeys.tu]: `${stem}ais`,
    [FrenchPronounKeys.il]: `${stem}ait`,
    [FrenchPronounKeys.nous]: `${stem}ions`,
    [FrenchPronounKeys.vous]: `${stem}iez`,
    [FrenchPronounKeys.ils]: `${stem}aient`,
  }

  returnVerb.simple = {
    [FrenchPronounKeys.je]: `${simplePastBootStem}s`,
    [FrenchPronounKeys.tu]: `${simplePastBootStem}s`,
    [FrenchPronounKeys.il]: `${simplePastBootStem}t`,
    [FrenchPronounKeys.nous]: `${simplePastStem}mes`,
    [FrenchPronounKeys.vous]: `${simplePastStem}tes`,
    [FrenchPronounKeys.ils]: `${simplePastBootStem}rent`,
  }

  return returnVerb;
}
