import { BaseFrenchVerb } from "@models/french/frenchTypes";
import { FrenchPronounKeys } from "french-types";

export const modifyRendreVerb = (verb: BaseFrenchVerb): BaseFrenchVerb => {
  const { infinitive } = verb;
  const newVerb = { ...verb };

  let participleStem = infinitive.slice(0, -5);
  let modifiedStem = infinitive.slice(0, -3);
  let participe = `${participleStem}is`;

  newVerb.participe = participe;
  newVerb.present_participe = `${modifiedStem}nant`

  newVerb.présent = {
    ...newVerb.présent,
    [FrenchPronounKeys.nous]: `${modifiedStem}ons`, [FrenchPronounKeys.vous]: `${modifiedStem}ez`, [FrenchPronounKeys.ils]: `${modifiedStem}nent`
  }

  newVerb.simple = {
    [FrenchPronounKeys.je]: `${participleStem}is`,
    [FrenchPronounKeys.tu]: `${participleStem}is`,
    [FrenchPronounKeys.il]: `${participleStem}it`,
    [FrenchPronounKeys.nous]: `${participleStem}îmes`,
    [FrenchPronounKeys.vous]: `${participleStem}îtes`,
    [FrenchPronounKeys.ils]: `${participleStem}irent`,
  }
  newVerb.subjunctif = {
    [FrenchPronounKeys.je]: `${modifiedStem}ne`,
    [FrenchPronounKeys.tu]: `${modifiedStem}nes`,
    [FrenchPronounKeys.il]: `${modifiedStem}ne`,
    [FrenchPronounKeys.nous]: `${modifiedStem}ions`,
    [FrenchPronounKeys.vous]: `${modifiedStem}iez`,
    [FrenchPronounKeys.ils]: `${modifiedStem}nent`,
  }

  return newVerb;
}
