import { GermanPronounKeys } from 'german-types';
import { modifiedStem } from '@germanUtilities/modifiedStem';

export const konjunktivConjugation = (
  stem: string,
  konjunktiv: string,
  particle = '',
): {
  [key: string]: string;
} => {
  const newStem = modifiedStem(stem, konjunktiv);
  let defaultEnding = 'e';
  if (konjunktiv === 'sei') {
    defaultEnding = '';
  }

  return {
    [GermanPronounKeys.ich]: `${particle}${newStem}${defaultEnding}`,
    [GermanPronounKeys.du]: `${particle}${newStem}${defaultEnding}st`,
    [GermanPronounKeys.es]: `${particle}${newStem}${defaultEnding}`,
    [GermanPronounKeys.wir]: `${particle}${newStem}en`,
    [GermanPronounKeys.ihr]: `${particle}${newStem}et`,
  };
};
