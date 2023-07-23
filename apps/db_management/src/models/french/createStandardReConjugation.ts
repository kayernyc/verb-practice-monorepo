import { simplePlural } from "@models/french/hydrationFunctions/atomicFunctions.ts/simplePlural";
import { FrenchTenses, FrenchPronounKeys, frenchVowels, FrenchBaseVerbConjugation } from "french-types";

const ecrirePattern = (infinitive: string, stem: string): FrenchBaseVerbConjugation => {
  const vStem = `${stem}v`;

  return {
    infinitive,
    helper_verb: 'avoir',
    participe: `${stem}t`,
    present_participe: `${vStem}ant`,
    [FrenchTenses.présent]: {
      [FrenchPronounKeys.je]: `${stem}s`,
      [FrenchPronounKeys.tu]: `${stem}s`,
      [FrenchPronounKeys.il]: `${stem}t`,
      [FrenchPronounKeys.nous]: `${vStem}ons`,
      [FrenchPronounKeys.vous]: `${vStem}ez`,
      [FrenchPronounKeys.ils]: `${vStem}ent`,
    },
    [FrenchTenses.simple]: {
      [FrenchPronounKeys.je]: `${vStem}is`,
      [FrenchPronounKeys.tu]: `${vStem}is`,
      [FrenchPronounKeys.il]: `${vStem}it`,
      [FrenchPronounKeys.nous]: `${vStem}îmes`,
      [FrenchPronounKeys.vous]: `${vStem}îtes`,
      [FrenchPronounKeys.ils]: `${vStem}irent`,
    },
    [FrenchTenses.imparfait]: {
      [FrenchPronounKeys.je]: `${vStem}ais`,
      [FrenchPronounKeys.tu]: `${vStem}ais`,
      [FrenchPronounKeys.il]: `${vStem}ait`,
      [FrenchPronounKeys.nous]: `${vStem}ions`,
      [FrenchPronounKeys.vous]: `${vStem}iez`,
      [FrenchPronounKeys.ils]: `${vStem}aient`,
    },
    [FrenchTenses.subjunctif]: {
      [FrenchPronounKeys.je]: `${vStem}e`,
      [FrenchPronounKeys.tu]: `${vStem}es`,
      [FrenchPronounKeys.il]: `${vStem}e`,
      [FrenchPronounKeys.nous]: `${vStem}ions`,
      [FrenchPronounKeys.vous]: `${vStem}iez`,
      [FrenchPronounKeys.ils]: `${vStem}ent`,
    },
    [FrenchTenses.futur]: {
      [FrenchPronounKeys.je]: `${stem}rai`,
      [FrenchPronounKeys.tu]: `${stem}ras`,
      [FrenchPronounKeys.il]: `${stem}ra`,
      [FrenchPronounKeys.nous]: `${stem}rons`,
      [FrenchPronounKeys.vous]: `${stem}rez`,
      [FrenchPronounKeys.ils]: `${stem}ront`,
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

const vowelStem = (infinitive: string, stem: string): FrenchBaseVerbConjugation => {
  const vowelS = `${stem}s`;
  let participStem = stem;
  let simpleStem = stem;

  const lastTwoChar = stem.slice(-2);
  switch (lastTwoChar) {
    case 'ui':
      participStem = `${stem}t`;
      simpleStem = `${vowelS}i`;
      break;

    case 'fi':
    case 'di':
      simpleStem = `${stem}`;
      break;

    case 'li':
      simpleStem = `${stem.slice(0, -1)}u`;
      break;
  }

  return {
    infinitive,
    helper_verb: 'avoir',
    participe: `${participStem}`,
    present_participe: `${vowelS}ant`,
    [FrenchTenses.présent]: {
      [FrenchPronounKeys.je]: `${vowelS}`,
      [FrenchPronounKeys.tu]: `${vowelS}`,
      [FrenchPronounKeys.il]: `${stem}t`,
      [FrenchPronounKeys.nous]: `${stem}sons`,
      [FrenchPronounKeys.vous]: `${stem}sez`,
      [FrenchPronounKeys.ils]: `${stem}sent`,
    },
    [FrenchTenses.simple]: {
      [FrenchPronounKeys.je]: `${simpleStem}s`,
      [FrenchPronounKeys.tu]: `${simpleStem}s`,
      [FrenchPronounKeys.il]: `${simpleStem}t`,
      [FrenchPronounKeys.nous]: `${simplePlural(simpleStem, 'mes')}`,
      [FrenchPronounKeys.vous]: `${simplePlural(simpleStem, 'tes')}`,
      [FrenchPronounKeys.ils]: `${simpleStem}rent`,
    },
    [FrenchTenses.imparfait]: {
      [FrenchPronounKeys.je]: `${vowelS}ais`,
      [FrenchPronounKeys.tu]: `${vowelS}ais`,
      [FrenchPronounKeys.il]: `${vowelS}ait`,
      [FrenchPronounKeys.nous]: `${vowelS}ions`,
      [FrenchPronounKeys.vous]: `${vowelS}iez`,
      [FrenchPronounKeys.ils]: `${vowelS}aient`,
    },
    [FrenchTenses.subjunctif]: {
      [FrenchPronounKeys.je]: `${vowelS}e`,
      [FrenchPronounKeys.tu]: `${vowelS}es`,
      [FrenchPronounKeys.il]: `${vowelS}e`,
      [FrenchPronounKeys.nous]: `${vowelS}ions`,
      [FrenchPronounKeys.vous]: `${vowelS}iez`,
      [FrenchPronounKeys.ils]: `${vowelS}ent`,
    },
    [FrenchTenses.futur]: {
      [FrenchPronounKeys.je]: `${stem}rai`,
      [FrenchPronounKeys.tu]: `${stem}ras`,
      [FrenchPronounKeys.il]: `${stem}ra`,
      [FrenchPronounKeys.nous]: `${stem}rons`,
      [FrenchPronounKeys.vous]: `${stem}rez`,
      [FrenchPronounKeys.ils]: `${stem}ront`,
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

export const reConjugation = (infinitive: string, stem: string): FrenchBaseVerbConjugation => {
  if (infinitive.slice(-5) === 'crire') {
    return ecrirePattern(infinitive, stem)
  }

  if (frenchVowels.includes(stem.charAt(stem.length - 1))) {
    return vowelStem(infinitive, stem);
  }

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
      [FrenchPronounKeys.je]: `${stem}rai`,
      [FrenchPronounKeys.tu]: `${stem}ras`,
      [FrenchPronounKeys.il]: `${stem}ra`,
      [FrenchPronounKeys.nous]: `${stem}rons`,
      [FrenchPronounKeys.vous]: `${stem}rez`,
      [FrenchPronounKeys.ils]: `${stem}ront`,
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
