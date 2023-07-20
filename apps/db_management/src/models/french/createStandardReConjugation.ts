import { BaseFrenchVerb } from "@models/french/frenchTypes";
import { FrenchTenses, FrenchPronounKeys, frenchVowels } from "french-types";

const ecrirePattern = (infinitive: string, stem: string): BaseFrenchVerb => {
  const vStem = `${stem}v`;
  const simpleStem = stem.slice(0, -1);

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
      [FrenchPronounKeys.ils]: `${stem}rent`,
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

const circomflexMap = {
  i: 'î',
  u: 'û',
}

const vowelStem = (infinitive: string, stem: string): BaseFrenchVerb => {
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

  const simplePlural = (stem: string, ending: string): string => {
    const lastChar = stem.slice(-1);
    const newStem = stem.slice(0, -1);
    const newVowel = circomflexMap[lastChar] || lastChar;
    return `${newStem}${newVowel}${ending}`;
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
      [FrenchPronounKeys.ils]: `${stem}rent`,
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

export const reConjugation = (infinitive: string, stem: string): BaseFrenchVerb => {
  console.log(infinitive.slice(-5))
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