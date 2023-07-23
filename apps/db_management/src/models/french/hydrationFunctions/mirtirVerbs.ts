import { FrenchBaseVerbConjugation, FrenchPronounKeys } from "french-types";

export const modifyMirtirVerbs = (verb: FrenchBaseVerbConjugation): FrenchBaseVerbConjugation => {
  const { infinitive } = verb;
  const returnVerb = { ...verb };

  const ending = infinitive.slice(-3);
  if (ending !== 'tir' && ending !== 'mir') {
    throw Error(`${infinitive} is not a mirtir verb.`)
  }

  const stem = infinitive.slice(0, -2);
  const smallStem = infinitive.slice(0, -3);
  returnVerb.present_participe = `${stem}ant`

  returnVerb.présent = {
    [FrenchPronounKeys.je]: `${smallStem}s`,
    [FrenchPronounKeys.tu]: `${smallStem}s`,
    [FrenchPronounKeys.il]: `${smallStem}t`,
    [FrenchPronounKeys.nous]: `${stem}ons`,
    [FrenchPronounKeys.vous]: `${stem}ez`,
    [FrenchPronounKeys.ils]: `${stem}ent`,
  }

  returnVerb.subjunctif = {
    [FrenchPronounKeys.je]: `${stem}e`,
    [FrenchPronounKeys.tu]: `${stem}es`,
    [FrenchPronounKeys.il]: `${stem}e`,
    [FrenchPronounKeys.nous]: `${stem}ions`,
    [FrenchPronounKeys.vous]: `${stem}iez`,
    [FrenchPronounKeys.ils]: `${stem}ent`,
  }

  returnVerb.imparfait!['1041'] = `${stem}ions`
  returnVerb.imparfait!['1074'] = `${stem}iez`
  returnVerb.imparfait!['1300'] = `${stem}aient`

  return returnVerb;
};
