import { LanguageVerbBase } from 'global-types';
import { cloneDeep } from 'lodash';
import {
  isFrenchVerb,
  FrenchVerbVariation
} from 'french-types';
import { generateStems } from '@germanUtilities/generateStems';
import { processVariation } from './processVariation';
import { createStandardConjugation } from './createStandardConjugation';

export const processFrRecord = (record: LanguageVerbBase) => {
  if (!isFrenchVerb(record)) {
    throw new Error(`Error: ${record.infinitive} is not a valid German Verb`);
  }

  if (typeof record.infinitive !== 'string' || record.infinitive.length < 1) {
    throw Error('record is missing infinitive.');
  }

  const {
    impersonal,
    infinitive,
    irregular,
    language,
    stems,
    translations,
    weakEndings,
  } = record;

  const baseRecord = {
    impersonal,
    irregular,
    stems,
    translations,
    weakEndings,
  };

  let { variations: variationsSource = [] } = record;

  variationsSource.unshift(baseRecord);

  // const variations = variationsSource.map((record: any, index: number) => {
  //   if (index > 0) {
  //     record = { ...baseRecord, ...record };
  //   }
  //   const newBaseHydratedVerb = cloneDeep(baseHydratedVerb);

  //   return processVariation(newBaseHydratedVerb, record, infinitive);
  // });

  let hydratedVerb = {
    infinitive,
    language,
    // variations,
  };

  return hydratedVerb;
};
