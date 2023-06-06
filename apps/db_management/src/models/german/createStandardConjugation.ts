import { GermanTenses, GermanPronounKeys } from 'german-types';
import { BaseGermanVerb } from './processDeRecord';
import kranton from './propertyTestFunctions/kranton';

export const createStandardConjugation = (
  infinitive: string,
  stem: string,
  particle = '',
): BaseGermanVerb => {
  const defaultEnding = kranton(stem) ? 'e' : '';

  return {
    partizip: `ge${stem}${defaultEnding}t`,
    [GermanTenses.präsens]: {
      [GermanPronounKeys.ich]: `${particle}${stem}e`,
      [GermanPronounKeys.du]: `${particle}${stem}${defaultEnding}st`,
      [GermanPronounKeys.es]: `${particle}${stem}${defaultEnding}t`,
      [GermanPronounKeys.wir]: infinitive,
      [GermanPronounKeys.ihr]: `${particle}${stem}${defaultEnding}t`,
    },
    [GermanTenses.konjunktiv]: {
      [GermanPronounKeys.ich]: `${particle}${stem}e`,
      [GermanPronounKeys.du]: `${particle}${stem}est`,
      [GermanPronounKeys.es]: `${particle}${stem}e`,
      [GermanPronounKeys.wir]: infinitive,
      [GermanPronounKeys.ihr]: `${particle}${stem}et`,
    },
    [GermanTenses.präteritum]: {
      [GermanPronounKeys.ich]: `${particle}${stem}${defaultEnding}te`,
      [GermanPronounKeys.du]: `${particle}${stem}${defaultEnding}test`,
      [GermanPronounKeys.es]: `${particle}${stem}${defaultEnding}te`,
      [GermanPronounKeys.wir]: `${particle}${stem}${defaultEnding}ten`,
      [GermanPronounKeys.ihr]: `${particle}${stem}${defaultEnding}tet`,
    },
    [GermanTenses.k2präsens]: {
      [GermanPronounKeys.ich]: `${particle}${stem}${defaultEnding}te`,
      [GermanPronounKeys.du]: `${particle}${stem}${defaultEnding}test`,
      [GermanPronounKeys.es]: `${particle}${stem}${defaultEnding}te`,
      [GermanPronounKeys.wir]: `${particle}${stem}${defaultEnding}ten`,
      [GermanPronounKeys.ihr]: `${particle}${stem}${defaultEnding}tet`,
    },
  } as BaseGermanVerb;
};
