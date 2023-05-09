import { GermanPronounKeys } from 'german-types';
import { modifiedStem } from './modifiedStem';

export const konjunktivConjugation = (
  stem: string,
  konjunktiv: string,
): {
  [key: string]: string;
} => {
  const newStem = modifiedStem(stem, konjunktiv);
  let defaultEnding = 'e';
  if (konjunktiv === 'sei') {
    defaultEnding = '';
  }

  return {
    [GermanPronounKeys.ich]: `${newStem}${defaultEnding}`,
    [GermanPronounKeys.du]: `${newStem}${defaultEnding}st`,
    [GermanPronounKeys.es]: `${newStem}${defaultEnding}`,
    [GermanPronounKeys.wir]: `${newStem}en`,
    [GermanPronounKeys.ihr]: `${newStem}et`,
  };
};
