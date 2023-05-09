import { LanguageVerbBase } from 'global-types';
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
import { irregularPartizipConjugation } from './utilities/irregularPartizipConjugation';
import { generateStems } from './utilities/generateStems';

const createStandardConjugation = (
  infinitive: string,
  stem: string,
): Omit<
  GermanVerbHydrated,
  'language' | 'translations' | 'hilfsverb' | 'infinitive' | 'stems'
> => {
  const defaultEnding = kranton(infinitive.slice(-2)) ? 'e' : '';

  return {
    partizip: `ge${stem}t`,
    [GermanTenses.präsens]: {
      [GermanPronounKeys.ich]: `${stem}e`,
      [GermanPronounKeys.du]: `${stem}${defaultEnding}st`,
      [GermanPronounKeys.es]: `${stem}${defaultEnding}t`,
      [GermanPronounKeys.wir]: infinitive,
      [GermanPronounKeys.ihr]: `${stem}${defaultEnding}t`,
    },
    [GermanTenses.konjunktiv]: {
      [GermanPronounKeys.ich]: `${stem}e`,
      [GermanPronounKeys.du]: `${stem}est`,
      [GermanPronounKeys.es]: `${stem}e`,
      [GermanPronounKeys.wir]: infinitive,
      [GermanPronounKeys.ihr]: `${stem}et`,
    },
    [GermanTenses.präteritum]: {
      [GermanPronounKeys.ich]: `${stem}te`,
      [GermanPronounKeys.du]: `${stem}test`,
      [GermanPronounKeys.es]: `${stem}te`,
      [GermanPronounKeys.wir]: `${stem}ten`,
      [GermanPronounKeys.ihr]: `${stem}tet`,
    },
    [GermanTenses.k2präsens]: {
      [GermanPronounKeys.ich]: `${stem}te`,
      [GermanPronounKeys.du]: `${stem}test`,
      [GermanPronounKeys.es]: `${stem}te`,
      [GermanPronounKeys.wir]: `${stem}ten`,
      [GermanPronounKeys.ihr]: `${stem}tet`,
    },
  } as Omit<
    GermanVerbHydrated,
    'language' | 'translations' | 'hilfsverb' | 'infinitive' | 'stems'
  >;
};

export const processDeRecord = (record: LanguageVerbBase) => {
  if (!isGermanVerb(record)) {
    throw new Error(`Error: ${record.infinitive} is not a valid German Verb`);
  }

  if (typeof record.infinitive !== 'string') {
    throw Error('record is missing infinitive.');
  }

  const { infinitive, language, translations, weakEndings } = record;
  const infinitiveStem = generateStems(infinitive);

  const hilfsverb: string =
    'hilfsverb' in record && typeof record.hilfsverb === 'string'
      ? record.hilfsverb
      : 'haben';

  const hydratedVerb = {
    infinitive,
    hilfsverb,
    language,
    translations,
    ...createStandardConjugation(record.infinitive, infinitiveStem),
  };

  if ('partizip' in record && record.partizip) {
    hydratedVerb.partizip = record.partizip;
  }

  if (verbIsIrregular(record, [...GERMAN_IRREGULAR_KEYS])) {
    if ('stems' in record && typeof record.stems === 'object') {
      const stems = record.stems;
      if ('duEs' in stems && typeof stems.duEs === 'string') {
        const [duValue, esValue] = duEsConjugation(
          stems.duEs,
          hydratedVerb.präsens!,
        );
        hydratedVerb.präsens![GermanPronounCode.du] = duValue;
        hydratedVerb.präsens![GermanPronounCode.es] = esValue;
      }

      if (
        ('partizip' in stems && typeof stems.partizip === 'string') ||
        (weakEndings &&
          'präteritum' in stems &&
          typeof stems.präteritum === 'string')
      ) {
        hydratedVerb.partizip = irregularPartizipConjugation({
          stem: infinitiveStem,
          partizip: stems.partizip,
          präteritum: stems.präteritum || '',
          infinitive,
          weakEndings: record.weakEndings || false,
        });
      }
    }
  }

  return hydratedVerb;
};
