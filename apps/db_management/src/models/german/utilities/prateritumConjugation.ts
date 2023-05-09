import { GermanPronounKeys } from 'german-types';
import kranton from '../propertyTestFunctions/kranton';
import { modifiedStem } from './modifiedStem';

export const präteritumConjugation = (
  stem: string,
  präteritum: string,
  weakEndings: boolean,
): { [key: string]: string } => {
  const newStem = modifiedStem(stem, präteritum);
  // is it Kranton?
  const defaultEnding = kranton(stem) ? 'e' : '';

  return {
    [GermanPronounKeys.ich]: `${newStem}${weakEndings ? 'te' : defaultEnding}`,
    [GermanPronounKeys.du]: `${newStem}${weakEndings ? 'te' : defaultEnding}st`,
    [GermanPronounKeys.es]: `${newStem}${weakEndings ? 'te' : defaultEnding}`,
    [GermanPronounKeys.wir]: `${newStem}${weakEndings ? 't' : ''}en`,
    [GermanPronounKeys.ihr]: `${newStem}${weakEndings ? 'te' : defaultEnding}t`,
  };
};
