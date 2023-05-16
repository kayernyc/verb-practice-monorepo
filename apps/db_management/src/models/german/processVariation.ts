import {
  GERMAN_IRREGULAR_KEYS,
  GermanPronounKeys,
  GermanTenses,
  GermanVerbHydrated,
  isGermanVerb,
  GermanPronounCode,
  GermanVerbVariation,
} from 'german-types';
import { BaseGermanVerb } from './processDeRecord';
import verbIsIrregular from '@utilities/propertyTestFunctions/verbIsIrregular';
import { hydrateDuEsConjugation } from './hydrationFunctions/hydrateDuEsConjugation';
import { hydrateIrregularPartizipConjugation } from './hydrationFunctions/hydrateIrregularPartizipConjugation';
import { hydrateKonjunktiv2Conjugation } from './hydrationFunctions/hydrateK2Conjugation';
import { konjunktivConjugation } from './hydrationFunctions/hydrateKonjunktivConjugation';
import { hydratePräteritumConjugation } from './hydrationFunctions/hydratePrateritumConjugation';
import { hydratePräsensSingular } from './hydrationFunctions/hydratePräsensSingular';
import { generateStems } from './utilities/generateStems';

export const processVariation = (
  baseHydratedVerb: BaseGermanVerb,
  record: any,
  infinitive: string,
) => {
  const { dative, genitive, translations, weakEndings } = record;

  const [infinitiveStem, particle] = generateStems(infinitive);

  const hilfsverb: string =
    'hilfsverb' in record && typeof record.hilfsverb === 'string'
      ? record.hilfsverb
      : 'haben';

  const hydratedVerb = {
    ...baseHydratedVerb,
    dative,
    genitive,
    translations,
    hilfsverb,
  };

  if ('partizip' in record && record.partizip) {
    hydratedVerb.partizip = record.partizip;
  }

  if (verbIsIrregular(record, [...GERMAN_IRREGULAR_KEYS])) {
    if ('stems' in record && typeof record.stems === 'object') {
      const stems = record.stems;

      if (
        'präsensSingular' in stems &&
        typeof stems.präsensSingular === 'string'
      ) {
        const [newIch, newDu, newEs] = hydratePräsensSingular(
          infinitiveStem,
          stems.präsensSingular,
          weakEndings,
        );
        hydratedVerb.präsens![GermanPronounCode.ich] = newIch;
        hydratedVerb.präsens![GermanPronounCode.du] = newDu;
        hydratedVerb.präsens![GermanPronounCode.es] = newEs;
      }

      if ('duEs' in stems && typeof stems.duEs === 'string') {
        const [duValue, esValue] = hydrateDuEsConjugation(
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
        hydratedVerb.partizip = hydrateIrregularPartizipConjugation({
          stem: infinitiveStem,
          partizip: stems.partizip,
          präteritum: stems.präteritum || '',
          infinitive,
          weakEndings: record.weakEndings || false,
        });
      }

      if ('präteritum' in stems && typeof stems.präteritum === 'string') {
        hydratedVerb.präteritum = hydratePräteritumConjugation(
          infinitiveStem,
          stems.präteritum,
          weakEndings || false,
          particle,
        );
      }

      if ('konjunktiv' in stems && typeof stems.konjunktiv === 'string') {
        hydratedVerb.konjunktiv = konjunktivConjugation(
          infinitiveStem,
          stems.konjunktiv,
          particle,
        );
      }

      if (stems.k2präsens || stems.präteritum || weakEndings) {
        hydratedVerb.k2präsens = hydrateKonjunktiv2Conjugation(
          infinitiveStem,
          stems.k2präsens || stems.präteritum || '',
          weakEndings || false,
          particle,
        );
      }
    }

    if ('irregular' in record && typeof record.irregular === 'object') {
      const irregular = record.irregular;
      for (const tense in irregular) {
        const target = hydratedVerb[tense as GermanTenses];

        if (
          (tense === GermanTenses.präsens ||
            tense === GermanTenses.präteritum) &&
          typeof irregular[tense] === 'object'
        ) {
          const irregularTense = irregular[tense];

          for (let pronoun in irregularTense) {
            if (
              target &&
              pronoun in irregularTense &&
              pronoun in GermanPronounCode
            ) {
              target[GermanPronounKeys[pronoun]] =
                irregularTense[pronoun as unknown as GermanPronounCode];
            }
          }
        }
      }
    }
  }

  return hydratedVerb;
};
