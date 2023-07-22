import { BaseFrenchVerb } from "@models/french/frenchTypes";
import { FrenchPronounKeys } from "french-types";

export const modifyTtreVerb = (verb: BaseFrenchVerb): BaseFrenchVerb => {
  const { infinitive } = verb;

  const newVerb = { ...verb };
  let participleStem = infinitive.slice(0, -5);
  let participe = `${participleStem}is`;

  let presentStem = infinitive.slice(0, -3);

  if (infinitive.length > 5 && infinitive.slice(-6) === 'battre') {
    participleStem = infinitive.slice(0, -2);
    participe = `${participleStem}u`;
  }

  newVerb.participe = participe;
  newVerb.présent = { ...newVerb.présent, '1033': `${presentStem}s`, '1098': `${presentStem}s`, '1292': presentStem }
  newVerb.simple = {
    [FrenchPronounKeys.je]: `${participleStem}is`,
    [FrenchPronounKeys.tu]: `${participleStem}is`,
    [FrenchPronounKeys.il]: `${participleStem}it`,
    [FrenchPronounKeys.nous]: `${participleStem}îmes`,
    [FrenchPronounKeys.vous]: `${participleStem}îtes`,
    [FrenchPronounKeys.ils]: `${participleStem}irent`,
  }

  return newVerb;

}