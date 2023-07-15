import { BaseFrenchVerb } from "@models/french/frenchTypes";
import { FrenchTenses, FrenchPronounKeys } from "french-types";

export const erConjugation = (infinitive: string, stem: string): BaseFrenchVerb => {
  const lastCharOfStem = stem.charAt(stem.length - 1);
  let variantStem: String | undefined;

  if (lastCharOfStem === 'c') {
    variantStem = `${stem.substring(0, stem.length - 1)}ç`;
  }

  if (lastCharOfStem === 'g') {
    variantStem = `${stem.substring(0, stem.length - 1)}ge`;
  }

  return {
    infinitive,
    helper_verb: 'avoir',
    participe: `${stem}é`,
    present_participe: `${variantStem ?? stem}ant`,
    [FrenchTenses.présent]: {
      [FrenchPronounKeys.je]: `${stem}e`,
      [FrenchPronounKeys.tu]: `${stem}es`,
      [FrenchPronounKeys.il]: `${stem}e`,
      [FrenchPronounKeys.nous]: `${variantStem ?? stem}ons`,
      [FrenchPronounKeys.vous]: `${stem}ez`,
      [FrenchPronounKeys.ils]: `${stem}ent`,
    },
    [FrenchTenses.simple]: {
      [FrenchPronounKeys.je]: `${variantStem ?? stem}ai`,
      [FrenchPronounKeys.tu]: `${variantStem ?? stem}as`,
      [FrenchPronounKeys.il]: `${variantStem ?? stem}a`,
      [FrenchPronounKeys.nous]: `${variantStem ?? stem}âmes`,
      [FrenchPronounKeys.vous]: `${variantStem ?? stem}âtes`,
      [FrenchPronounKeys.ils]: `${stem}èrent`,
    },
    [FrenchTenses.imparfait]: {
      [FrenchPronounKeys.je]: `${variantStem ?? stem}ais`,
      [FrenchPronounKeys.tu]: `${variantStem ?? stem}ais`,
      [FrenchPronounKeys.il]: `${variantStem ?? stem}ait`,
      [FrenchPronounKeys.nous]: `${stem}ions`,
      [FrenchPronounKeys.vous]: `${stem}iez`,
      [FrenchPronounKeys.ils]: `${variantStem ?? stem}aient`,
    },
    [FrenchTenses.subjunctif]: {
      [FrenchPronounKeys.je]: `${stem}e`,
      [FrenchPronounKeys.tu]: `${stem}es`,
      [FrenchPronounKeys.il]: `${stem}e`,
      [FrenchPronounKeys.nous]: `${stem}ions`,
      [FrenchPronounKeys.vous]: `${stem}iez`,
      [FrenchPronounKeys.ils]: `${stem}ent`,
    },
    [FrenchTenses.futur]: {
      [FrenchPronounKeys.je]: `${infinitive}ai`,
      [FrenchPronounKeys.tu]: `${infinitive}as`,
      [FrenchPronounKeys.il]: `${infinitive}a`,
      [FrenchPronounKeys.nous]: `${infinitive}ons`,
      [FrenchPronounKeys.vous]: `${infinitive}ez`,
      [FrenchPronounKeys.ils]: `${infinitive}ent`,
    },
    [FrenchTenses.conditional]: {
      [FrenchPronounKeys.je]: `${infinitive}ais`,
      [FrenchPronounKeys.tu]: `${infinitive}ais`,
      [FrenchPronounKeys.il]: `${infinitive}ait`,
      [FrenchPronounKeys.nous]: `${infinitive}ions`,
      [FrenchPronounKeys.vous]: `${infinitive}iez`,
      [FrenchPronounKeys.ils]: `${infinitive}aient`,
    }
  }
}