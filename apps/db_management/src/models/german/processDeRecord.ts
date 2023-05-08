import { LanguageMap, LanguageVerbBase } from 'global-types';
import {
  GERMAN_IRREGULAR_KEYS,
  GermanPronounKeys,
  GermanTenses,
  GermanVerbHydrated,
  isGermanVerb,
  GermanPronounCode,
} from 'german-types';
import kranton from './propertyTestFunctions/kranton';
import verbIsIrregular from '@utilities/propertyTestFunctions/verbIsIrregular';
import { duEsConjugation } from './utilities/hydrateDuEsConjugation';

const createStandardConjugation = (
  infinitive: string,
): Omit<
  GermanVerbHydrated,
  'language' | 'translations' | 'hilfsverb' | 'infinitive' | 'stems'
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
    'language' | 'translations' | 'hilfsverb' | 'infinitive' | 'stems'
  >;
};

export const processDeRecord = (record: LanguageVerbBase) => {
  // confirm record is German
  if (!isGermanVerb(record)) {
    throw new Error(`Error: ${record.infinitive} is not a valid German Verb`);
  }

  if (typeof record.infinitive !== 'string') {
    throw Error('record is missing infinitive.');
  }

  const { infinitive, language, translations } = record;

  const hilfsverb: string =
    'hilfsverb' in record && typeof record.hilfsverb === 'string'
      ? record.hilfsverb
      : 'haben';

  const hydratedVerb = {
    infinitive,
    hilfsverb,
    language,
    translations,
    ...createStandardConjugation(record.infinitive),
  };

  if ('partizip' in record && record.partizip) {
    hydratedVerb.partizip = record.partizip;
  }

  if (verbIsIrregular(record, [...GERMAN_IRREGULAR_KEYS])) {
    if ('stems' in record && typeof record.stems === 'object') {
      if ('duEs' in record.stems && typeof record.stems.duEs === 'string') {
        const [duValue, esValue] = duEsConjugation(
          record.stems.duEs,
          hydratedVerb.präsens!,
        );
        hydratedVerb.präsens![GermanPronounCode.du] = duValue;
        hydratedVerb.präsens![GermanPronounCode.es] = esValue;
      }
    }
  }

  return hydratedVerb;
};
