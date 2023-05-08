import { LanguageVerbBase } from 'global-types';
import {
  GERMAN_IRREGULAR_KEYS,
  GermanPronounKeys,
  GermanKeyPronoun,
  GermanTenses,
  GermanVerbHydrated,
  isGermanVerb,
} from 'german-types';
import kranton from './propertyTestFunctions/kranton';
import verbIsIrregular from '@utilities/propertyTestFunctions/verbIsIrregular';

const createStandardConjugation = (
  infinitive: string,
): Omit<
  GermanVerbHydrated,
  'language' | 'translations' | 'hilfsverb' | 'infinitive'
> => {
  const infinitiveStem = infinitive.slice(0, -2);
  const defaultEnding = kranton(infinitiveStem) ? 'e' : '';

  return {
    partizip: `ge${infinitiveStem}t`,
    [GermanTenses.präsens]: {
      [GermanPronounKeys.ich]: `${infinitiveStem}e`,
      [GermanPronounKeys.du]: `${infinitiveStem}${defaultEnding}st`,
      [GermanPronounKeys.es]: `${infinitiveStem}${defaultEnding}t`,
      [GermanPronounKeys.wir]: infinitive,
      [GermanPronounKeys.ihr]: `${infinitiveStem}${defaultEnding}t`,
    },
    [GermanTenses.konjunktiv]: {
      [GermanPronounKeys.ich]: `${infinitiveStem}e`,
      [GermanPronounKeys.du]: `${infinitiveStem}est`,
      [GermanPronounKeys.es]: `${infinitiveStem}e`,
      [GermanPronounKeys.wir]: infinitive,
      [GermanPronounKeys.ihr]: `${infinitiveStem}et`,
    },
    [GermanTenses.präteritum]: {
      [GermanPronounKeys.ich]: `${infinitiveStem}te`,
      [GermanPronounKeys.du]: `${infinitiveStem}test`,
      [GermanPronounKeys.es]: `${infinitiveStem}te`,
      [GermanPronounKeys.wir]: `${infinitiveStem}ten`,
      [GermanPronounKeys.ihr]: `${infinitiveStem}tet`,
    },
    [GermanTenses.k2präsens]: {
      [GermanPronounKeys.ich]: `${infinitiveStem}te`,
      [GermanPronounKeys.du]: `${infinitiveStem}test`,
      [GermanPronounKeys.es]: `${infinitiveStem}te`,
      [GermanPronounKeys.wir]: `${infinitiveStem}ten`,
      [GermanPronounKeys.ihr]: `${infinitiveStem}tet`,
    },
  } as Omit<
    GermanVerbHydrated,
    'language' | 'translations' | 'hilfsverb' | 'infinitive'
  >;
};

export const processDeRecord = (record: LanguageVerbBase) => {
  // confirm record is German
  if (!isGermanVerb(record)) {
    throw new Error(`Error: ${record.infinitive} is not a valid German Verb`);
  }

  if (typeof record.infinitive !== 'string') {
    console.log({ record }, record.translations.en);
    throw Error('record is missing infinitive.');
  }

  const hilfsverb: string =
    'hilfsverb' in record && typeof record.hilfsverb === 'string'
      ? record.hilfsverb
      : 'haben';

  const hydratedVerb = {
    ...record,
    hilfsverb,
    ...createStandardConjugation(record.infinitive),
  };

  if ('partizip' in record && record.partizip) {
    hydratedVerb.partizip = record.partizip;
  }

  if (verbIsIrregular(record, [...GERMAN_IRREGULAR_KEYS])) {
    console.log('BWYA');
  }

  return hydratedVerb;
};

/*
: Omit<
  GermanVerbHydrated,
  'language' | 'translations' | 'hilfsverb' | 'infinitive'
> 

*/
