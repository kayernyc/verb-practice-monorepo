import { BaseFrenchVerb } from "@models/french/frenchTypes";
import { FrenchPronounKeys, FrenchTenses } from "french-types";

type ConjugationFunction = (infinitive: string, stem: string) => BaseFrenchVerb;

const erConjugation = (infinitive: string, stem: string): BaseFrenchVerb => {
  return {
    helper_verb: 'avoir',
    participe: `${stem}é`,
    present_participe: `${stem}ant`,
    [FrenchTenses.présent]: {
      [FrenchPronounKeys.je]: `${stem}e`,
      [FrenchPronounKeys.tu]: `${stem}es`,
      [FrenchPronounKeys.il]: `${stem}e`,
      [FrenchPronounKeys.nous]: `${stem}ons`,
      [FrenchPronounKeys.vous]: `${stem}ez`,
      [FrenchPronounKeys.ils]: `${stem}ent`,
    },
    [FrenchTenses.simple]: {
      [FrenchPronounKeys.je]: `${stem}ai`,
      [FrenchPronounKeys.tu]: `${stem}as`,
      [FrenchPronounKeys.il]: `${stem}a`,
      [FrenchPronounKeys.nous]: `${stem}âmes`,
      [FrenchPronounKeys.vous]: `${stem}âtes`,
      [FrenchPronounKeys.ils]: `${stem}èrent`,
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
      [FrenchPronounKeys.je]: `${infinitive}ais`,
      [FrenchPronounKeys.tu]: `${infinitive}ais`,
      [FrenchPronounKeys.il]: `${infinitive}ait`,
      [FrenchPronounKeys.nous]: `${infinitive}ions`,
      [FrenchPronounKeys.vous]: `${infinitive}iez`,
      [FrenchPronounKeys.ils]: `${infinitive}aient`,
    }
  }
}
const irConjugation = (infinitive: string, stem: string): BaseFrenchVerb => {
  return {
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

const reConjugation = (infinitive: string, stem: string): BaseFrenchVerb => {
  return {
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

export const createStandardConjugation = (infinitive: string): BaseFrenchVerb => {
  const ending = infinitive.slice(-2);
  const stem = infinitive.slice(0, -2)

  const strategy: Record<string, ConjugationFunction> = {
    er: erConjugation,
    ir: irConjugation,
    re: reConjugation,
  }

  if (ending in strategy) {
    return strategy[ending](infinitive, stem)
  }
  throw Error(`${infinitive} does not fit French pattern.`)
}