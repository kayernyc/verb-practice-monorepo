import { simplePlural } from "@models/french/hydrationFunctions/atomicFunctions.ts/simplePlural";
import { FrenchPronounKeys, FrenchTenses } from "french-types";

const conditionalImparfait = (stem: string) => ({
  [FrenchPronounKeys.je]: `${stem}ais`,
  [FrenchPronounKeys.tu]: `${stem}ais`,
  [FrenchPronounKeys.il]: `${stem}ait`,
  [FrenchPronounKeys.nous]: `${stem}ions`,
  [FrenchPronounKeys.vous]: `${stem}iez`,
  [FrenchPronounKeys.ils]: `${stem}aient`,
})

const simpleReStem = (stem: string) => {
  return {
    [FrenchPronounKeys.je]: `${stem}s`,
    [FrenchPronounKeys.tu]: `${stem}s`,
    [FrenchPronounKeys.il]: `${stem}t`,
    [FrenchPronounKeys.nous]: `${simplePlural(stem, 'mes')}`,
    [FrenchPronounKeys.vous]: `${simplePlural(stem, 'tes')}`,
    [FrenchPronounKeys.ils]: `${stem}rent`,
  }
}

const simpleTense = (stem: string, ending = 'er') => {
  switch (ending) {
    case 're':
      return simpleReStem(stem);

    case 'ir':
      return {
        [FrenchPronounKeys.je]: `${stem}is`,
        [FrenchPronounKeys.tu]: `${stem}is`,
        [FrenchPronounKeys.il]: `${stem}it`,
        [FrenchPronounKeys.nous]: `${stem}îmes`,
        [FrenchPronounKeys.vous]: `${stem}îtes`,
        [FrenchPronounKeys.ils]: `${stem}irent`,
      }

    default:
      return {
        [FrenchPronounKeys.je]: `${stem}ai`,
        [FrenchPronounKeys.tu]: `${stem}as`,
        [FrenchPronounKeys.il]: `${stem}a`,
        [FrenchPronounKeys.nous]: `${stem}âmes`,
        [FrenchPronounKeys.vous]: `${stem}âtes`,
        [FrenchPronounKeys.ils]: `${stem}èrent`,
      }
  }
}

const tenseFactory = {
  [FrenchTenses.présent]: (stem: string) => ({
    [FrenchPronounKeys.je]: `${stem}e`,
    [FrenchPronounKeys.tu]: `${stem}es`,
    [FrenchPronounKeys.il]: `${stem}e`,
    [FrenchPronounKeys.nous]: `${stem}ons`,
    [FrenchPronounKeys.vous]: `${stem}ez`,
    [FrenchPronounKeys.ils]: `${stem}ent`,
  }),
  [FrenchTenses.conditional]: conditionalImparfait,
  [FrenchTenses.imparfait]: conditionalImparfait,
  [FrenchTenses.futur]: (stem: string) => ({
    [FrenchPronounKeys.je]: `${stem}ai`,
    [FrenchPronounKeys.tu]: `${stem}as`,
    [FrenchPronounKeys.il]: `${stem}a`,
    [FrenchPronounKeys.nous]: `${stem}ons`,
    [FrenchPronounKeys.vous]: `${stem}ez`,
    [FrenchPronounKeys.ils]: `${stem}ont`,
  }),
  [FrenchTenses.simple]: simpleTense,
  [FrenchTenses.subjunctif]: (stem: string) => ({
    [FrenchPronounKeys.je]: `${stem}e`,
    [FrenchPronounKeys.tu]: `${stem}es`,
    [FrenchPronounKeys.il]: `${stem}e`,
    [FrenchPronounKeys.nous]: `${stem}ions`,
    [FrenchPronounKeys.vous]: `${stem}iez`,
    [FrenchPronounKeys.ils]: `${stem}ent`,
  })
}

export const irregularStems = (tense: FrenchTenses, stem: string, infinitive: string) => {
  if (tense === FrenchTenses.simple) {
    return tenseFactory[tense](stem, infinitive.slice(-2));
  }

  return tenseFactory[tense](stem);
}
