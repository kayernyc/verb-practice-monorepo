import { LanguageVerbBase } from 'global-types';
import { cloneDeep } from 'lodash';
import {
  isGermanVerb,
  GermanVerbVariation,
  separableArray,
} from 'german-types';
import { generateStems } from '@germanUtilities/generateStems';
import { processVariation } from './processVariation';
import { createStandardConjugation } from './createStandardConjugation';

export type BaseGermanVerb = Omit<
  GermanVerbVariation,
  'translations' | 'hilfsverb' | 'infinitive' | 'stems'
>;

const particleIsInseperable = (particle?: string) => {
  if (particle && !separableArray.includes(particle)) {
    return particle;
  }
  return;
};

export const processDeRecord = (record: LanguageVerbBase) => {
  if (!isGermanVerb(record)) {
    throw new Error(`Error: ${record.infinitive} is not a valid German Verb`);
  }

  if (typeof record.infinitive !== 'string' || record.infinitive.length < 1) {
    throw Error('record is missing infinitive.');
  }

  const {
    dative,
    genitive,
    drop,
    impersonal,
    infinitive,
    irregular,
    hilfsverb,
    language,
    partizip,
    particle,
    stems,
    translations,
    weakEndings,
  } = record;

  const baseRecord = {
    dative,
    genitive,
    drop,
    impersonal,
    irregular,
    hilfsverb,
    partizip,
    stems,
    translations,
    weakEndings,
  };

  const [infinitiveStem, _particle] = generateStems(infinitive);

  const verbParticle = particleIsInseperable(particle) || _particle;

  const baseHydratedVerb = {
    hilfsverb,
    translations,
    ...createStandardConjugation(infinitive, infinitiveStem, verbParticle),
  };

  let { variations: variationsSource = [] } = record;

  variationsSource.unshift(baseRecord);

  const variations = variationsSource.map((record: any, index: number) => {
    if (index > 0) {
      record = { ...baseRecord, ...record };
    }
    const newBaseHydratedVerb = cloneDeep(baseHydratedVerb);

    return processVariation(newBaseHydratedVerb, record, infinitive);
  });

  let hydratedVerb = {
    infinitive,
    language,
    variations,
  };

  return hydratedVerb;
};
