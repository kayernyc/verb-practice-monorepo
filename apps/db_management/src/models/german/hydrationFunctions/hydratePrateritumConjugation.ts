import { GermanPronounKeys } from 'german-types';
import kranton from '../propertyTestFunctions/kranton';
import { modifiedStem } from '../utilities/modifiedStem';
import { processStemSubstitution } from '../utilities/processStemSubstitution';

export const hydratePräteritumConjugation = (
  regularStem: string,
  irregularStem: string,
  weakEndings: boolean,
  particle = '',
): { [key: string]: string } => {
  // const newStem = modifiedStem(stem, präteritum);
  let newStem = processStemSubstitution({ regularStem, irregularStem });

  // is it Kranton?
  const defaultEnding = kranton(regularStem) ? 'e' : '';

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
