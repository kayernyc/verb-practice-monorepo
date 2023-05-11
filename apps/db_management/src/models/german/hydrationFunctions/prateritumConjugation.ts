import { GermanPronounKeys } from 'german-types';
import kranton from '../propertyTestFunctions/kranton';
import { modifiedStem } from '../utilities/modifiedStem';

export const präteritumConjugation = (
  stem: string,
  präteritum: string,
  weakEndings: boolean,
  particle = '',
): { [key: string]: string } => {
  const newStem = modifiedStem(stem, präteritum);

  // is it Kranton?
  const defaultEnding = kranton(stem) ? 'e' : '';

  return {
    [GermanPronounKeys.ich]: `${particle}${newStem}${
      weakEndings ? 'te' : defaultEnding
    }`,
    [GermanPronounKeys.du]: `${particle}${newStem}${
      weakEndings ? 'te' : defaultEnding
    }st`,
    [GermanPronounKeys.es]: `${particle}${newStem}${
      weakEndings ? 'te' : defaultEnding
    }`,
    [GermanPronounKeys.wir]: `${particle}${newStem}${weakEndings ? 't' : ''}en`,
    [GermanPronounKeys.ihr]: `${particle}${newStem}${
      weakEndings ? 'te' : defaultEnding
    }t`,
  };
};
