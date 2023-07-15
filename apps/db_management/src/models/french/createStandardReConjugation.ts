import { BaseFrenchVerb } from "@models/french/frenchTypes"
import { FrenchTenses, FrenchPronounKeys } from "french-types"

export const reConjugation = (infinitive: string, stem: string): BaseFrenchVerb => {
  return {
    infinitive,
    helper_verb: 'avoir',
    participe: `${stem}u`,
    present_participe: `${stem}ant`,
    [FrenchTenses.présent]: {
      [FrenchPronounKeys.je]: `${stem}s`,
      [FrenchPronounKeys.tu]: `${stem}s`,
      [FrenchPronounKeys.il]: `${stem}`,
      [FrenchPronounKeys.nous]: `${stem}ons`,
      [FrenchPronounKeys.vous]: `${stem}ez`,
      [FrenchPronounKeys.ils]: `${stem}ent`,
    },
    [FrenchTenses.simple]: {
      [FrenchPronounKeys.je]: `${stem}is`,
      [FrenchPronounKeys.tu]: `${stem}is`,
      [FrenchPronounKeys.il]: `${stem}it`,
      [FrenchPronounKeys.nous]: `${stem}îmes`,
      [FrenchPronounKeys.vous]: `${stem}îtes`,
      [FrenchPronounKeys.ils]: `${stem}irent`,
    },
    [FrenchTenses.imparfait]: {
      [FrenchPronounKeys.je]: `${stem}ais`,
      [FrenchPronounKeys.tu]: `${stem}ais`,
      [FrenchPronounKeys.il]: `${stem}ait`,
      [FrenchPronounKeys.nous]: `${stem}ions`,
      [FrenchPronounKeys.vous]: `${stem}iez`,
      [FrenchPronounKeys.ils]: `${stem}aient`,
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
      [FrenchPronounKeys.je]: `${stem}rais`,
      [FrenchPronounKeys.tu]: `${stem}rais`,
      [FrenchPronounKeys.il]: `${stem}rait`,
      [FrenchPronounKeys.nous]: `${stem}rions`,
      [FrenchPronounKeys.vous]: `${stem}riez`,
      [FrenchPronounKeys.ils]: `${stem}raient`,
    }
  }
}