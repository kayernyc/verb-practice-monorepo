import { FrenchTenses, FrenchPronounKeys, FrenchBaseVerbConjugation } from "french-types";

export const modifyIndreVerb = (verb: FrenchBaseVerbConjugation): FrenchBaseVerbConjugation => {
  const stem = verb.infinitive.slice(0, -3);
  const infinitiveStem = verb.infinitive.slice(0, -2);
  const pluralStem = `${verb.infinitive.slice(0, -4)}gn`
  console.log(stem, pluralStem)

  return {
    infinitive: verb.infinitive,
    helper_verb: 'avoir',
    participe: `${stem}t`,
    present_participe: `${pluralStem}ant`,
    [FrenchTenses.présent]: {
      [FrenchPronounKeys.je]: `${stem}s`,
      [FrenchPronounKeys.tu]: `${stem}s`,
      [FrenchPronounKeys.il]: `${stem}t`,
      [FrenchPronounKeys.nous]: `${pluralStem}ons`,
      [FrenchPronounKeys.vous]: `${pluralStem}ez`,
      [FrenchPronounKeys.ils]: `${pluralStem}ent`,
    },
    [FrenchTenses.simple]: {
      [FrenchPronounKeys.je]: `${pluralStem}is`,
      [FrenchPronounKeys.tu]: `${pluralStem}is`,
      [FrenchPronounKeys.il]: `${pluralStem}it`,
      [FrenchPronounKeys.nous]: `${pluralStem}îmes`,
      [FrenchPronounKeys.vous]: `${pluralStem}îtes`,
      [FrenchPronounKeys.ils]: `${pluralStem}irent`,
    },
    [FrenchTenses.imparfait]: {
      [FrenchPronounKeys.je]: `${pluralStem}ais`,
      [FrenchPronounKeys.tu]: `${pluralStem}ais`,
      [FrenchPronounKeys.il]: `${pluralStem}ait`,
      [FrenchPronounKeys.nous]: `${pluralStem}ions`,
      [FrenchPronounKeys.vous]: `${pluralStem}iez`,
      [FrenchPronounKeys.ils]: `${pluralStem}aient`,
    },
    [FrenchTenses.subjunctif]: {
      [FrenchPronounKeys.je]: `${pluralStem}e`,
      [FrenchPronounKeys.tu]: `${pluralStem}es`,
      [FrenchPronounKeys.il]: `${pluralStem}e`,
      [FrenchPronounKeys.nous]: `${pluralStem}ions`,
      [FrenchPronounKeys.vous]: `${pluralStem}iez`,
      [FrenchPronounKeys.ils]: `${pluralStem}ent`,
    },
    [FrenchTenses.futur]: {
      [FrenchPronounKeys.je]: `${infinitiveStem}rai`,
      [FrenchPronounKeys.tu]: `${infinitiveStem}ras`,
      [FrenchPronounKeys.il]: `${infinitiveStem}ra`,
      [FrenchPronounKeys.nous]: `${infinitiveStem}rons`,
      [FrenchPronounKeys.vous]: `${infinitiveStem}rez`,
      [FrenchPronounKeys.ils]: `${infinitiveStem}ront`,
    },
    [FrenchTenses.conditional]: {
      [FrenchPronounKeys.je]: `${infinitiveStem}rais`,
      [FrenchPronounKeys.tu]: `${infinitiveStem}rais`,
      [FrenchPronounKeys.il]: `${infinitiveStem}rait`,
      [FrenchPronounKeys.nous]: `${infinitiveStem}rions`,
      [FrenchPronounKeys.vous]: `${infinitiveStem}riez`,
      [FrenchPronounKeys.ils]: `${infinitiveStem}raient`,
    }
  }
}
