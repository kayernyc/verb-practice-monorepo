import { LanguageVerbBase } from 'global-types';
import { cloneDeep } from 'lodash';
import {
  allFrenchTenses,
  isFrenchVerb,
  FrenchVerbVariation,
  FrenchPronounCode,
  FrenchTenses
} from 'french-types';
import { processVariation } from './processVariation';
import { createStandardConjugation } from './createStandardConjugation';
import { irregularStems } from '@models/french/hydrationFunctions/irregularStems';

export const processFrRecord = (record: LanguageVerbBase) => {
  if (!isFrenchVerb(record)) {
    throw new Error(`Error: ${record.infinitive} is not a valid German Verb`);
  }

  if (typeof record.infinitive !== 'string' || record.infinitive.length < 1) {
    throw Error('record is missing infinitive.');
  }

  const { infinitive, language } = record;

  const verb = createStandardConjugation(infinitive);

  if (record.stems) {
    Object.entries(record.stems).forEach(([tense, stem]) => {
      verb[tense] = irregularStems(FrenchTenses[tense], stem, infinitive);
    })
  }

  if (record.irregular) {
    Object.entries(record.irregular).forEach(([key, value]) => {
      if (verb[key] && typeof verb[key] === 'string' && typeof value === 'string') {
        // is a simple key
        verb[key] = value;
      } else if (allFrenchTenses.includes(key)) {
        const targetTense = verb[key];
        Object.entries(value).forEach(([person, verbString]) => {
          targetTense[FrenchPronounCode[person]] = verbString;
        });
      }
    })
  }

  // const {
  //   impersonal,
  //   infinitive,
  //   language,
  //   stems,
  //   translations,

  // } = record;

  // const baseRecord = {
  //   impersonal,
  //   stems,
  //   translations,

  // };

  // let { variations: variationsSource = [] } = record;

  // variationsSource.unshift(baseRecord);

  // const variations = variationsSource.map((record: any, index: number) => {
  //   if (index > 0) {
  //     record = { ...baseRecord, ...record };
  //   }
  //   const newBaseHydratedVerb = cloneDeep(baseHydratedVerb);

  //   return processVariation(newBaseHydratedVerb, record, infinitive);
  // });

  let hydratedVerb = {
    language,
    ...verb,
    // variations,
  };

  return hydratedVerb;
};
