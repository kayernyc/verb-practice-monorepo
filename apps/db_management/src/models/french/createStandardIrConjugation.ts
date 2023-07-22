import { BaseFrenchVerb } from "@models/french/frenchTypes"
import { FrenchTenses, FrenchPronounKeys } from "french-types"

export const irConjugation = (infinitive: string, stem: string): BaseFrenchVerb => {
  return {
    infinitive,
    helper_verb: 'avoir',
    participe: `${stem}i`,
    present_participe: `${stem}issant`,
    [FrenchTenses.présent]: {
      [FrenchPronounKeys.je]: `${stem}is`,
      [FrenchPronounKeys.tu]: `${stem}is`,
      [FrenchPronounKeys.il]: `${stem}it`,
      [FrenchPronounKeys.nous]: `${stem}issons`,
      [FrenchPronounKeys.vous]: `${stem}issez`,
      [FrenchPronounKeys.ils]: `${stem}issent`,
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
      [FrenchPronounKeys.nous]: `${stem}issions`,
      [FrenchPronounKeys.vous]: `${stem}issiez`,
      [FrenchPronounKeys.ils]: `${stem}issaient`,
    },
    [FrenchTenses.subjunctif]: {
      [FrenchPronounKeys.je]: `${stem}isse`,
      [FrenchPronounKeys.tu]: `${stem}isses`,
      [FrenchPronounKeys.il]: `${stem}isse`,
      [FrenchPronounKeys.nous]: `${stem}issions`,
      [FrenchPronounKeys.vous]: `${stem}issiez`,
      [FrenchPronounKeys.ils]: `${stem}issent`,
    },
    [FrenchTenses.futur]: {
      [FrenchPronounKeys.je]: `${infinitive}ai`,
      [FrenchPronounKeys.tu]: `${infinitive}as`,
      [FrenchPronounKeys.il]: `${infinitive}a`,
      [FrenchPronounKeys.nous]: `${infinitive}ons`,
      [FrenchPronounKeys.vous]: `${infinitive}ez`,
      [FrenchPronounKeys.ils]: `${infinitive}ont`,
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
