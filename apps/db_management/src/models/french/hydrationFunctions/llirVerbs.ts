import { BaseFrenchVerb } from "@models/french/frenchTypes";
import { FrenchPronounKeys } from "french-types";

export const modifyLlirVerbs = (verb: BaseFrenchVerb): BaseFrenchVerb => {
  const { infinitive } = verb;
  const returnVerb = { ...verb };
  const stem = infinitive.slice(0, -2);

  returnVerb.present_participe = `${stem}ant`;
  if (stem.slice(-1) === 'r') {
    returnVerb.participe = `${infinitive.slice(0, -3)}ert`;
  }

  returnVerb.présent = {
    [FrenchPronounKeys.je]: `${stem}e`,
    [FrenchPronounKeys.tu]: `${stem}es`,
    [FrenchPronounKeys.il]: `${stem}e`,
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
}
