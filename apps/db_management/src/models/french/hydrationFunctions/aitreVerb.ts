import { BaseFrenchVerb } from "@models/french/frenchTypes";
import { FrenchPronounKeys } from "french-types";

export const modifyAitreVerbs = (verb: BaseFrenchVerb): BaseFrenchVerb => {
  const { infinitive } = verb;
  const returnVerb = { ...verb };

  const participeStem = infinitive.slice(0, -5);
  const presentParticipeStem = infinitive.slice(0, -4) + 'iss';

  returnVerb.present_participe = `${presentParticipeStem}ant`;
  returnVerb.participe = `${participeStem}u`;

  returnVerb.présent = {
    [FrenchPronounKeys.je]: `${participeStem}ais`,
    [FrenchPronounKeys.tu]: `${participeStem}ais`,
    [FrenchPronounKeys.il]: `${participeStem}aît`,
    [FrenchPronounKeys.nous]: `${participeStem}aissons`,
    [FrenchPronounKeys.vous]: `${participeStem}aissez`,
    [FrenchPronounKeys.ils]: `${participeStem}aissent`,
  }

  returnVerb.imparfait = {
    [FrenchPronounKeys.je]: `${presentParticipeStem}ais`,
    [FrenchPronounKeys.tu]: `${presentParticipeStem}ais`,
    [FrenchPronounKeys.il]: `${presentParticipeStem}ait`,
    [FrenchPronounKeys.nous]: `${presentParticipeStem}ions`,
    [FrenchPronounKeys.vous]: `${presentParticipeStem}iez`,
    [FrenchPronounKeys.ils]: `${presentParticipeStem}aient`,
  }

  returnVerb.simple = {
    [FrenchPronounKeys.je]: `${participeStem}us`,
    [FrenchPronounKeys.tu]: `${participeStem}us`,
    [FrenchPronounKeys.il]: `${participeStem}ut`,
    [FrenchPronounKeys.nous]: `${participeStem}ûmes`,
    [FrenchPronounKeys.vous]: `${participeStem}ûtes`,
    [FrenchPronounKeys.ils]: `${participeStem}urent`,
  }

  returnVerb.subjunctif = {
    [FrenchPronounKeys.je]: `${presentParticipeStem}e`,
    [FrenchPronounKeys.tu]: `${presentParticipeStem}es`,
    [FrenchPronounKeys.il]: `${presentParticipeStem}e`,
    [FrenchPronounKeys.nous]: `${presentParticipeStem}ions`,
    [FrenchPronounKeys.vous]: `${presentParticipeStem}iez`,
    [FrenchPronounKeys.ils]: `${presentParticipeStem}ent`,
  }

  return returnVerb;
}
