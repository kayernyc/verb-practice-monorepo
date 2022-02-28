/* eslint-disable no-console */
import {
  GermanPronounKeys, GermanTenses, GermanVerb, GermanVerbHydrated,
} from '@german/germanTypes';
import irregularPartizipConjugation from './irregularPartizipConjugation';
import { kranton } from '../hydrateGermanVerb';

import duEsConjugation from './hydrateDuEsConjugation';
import modifiedStem from './modifiedStem';

function präteritumConjugation(
  { stem, präteritum, weakEndings }: { stem: string, präteritum: string, weakEndings: boolean },
): { [key: string]: string } {
  const newStem = modifiedStem({ stem, irregularStem: präteritum });
  // is it Kranton?
  const defaultEnding = kranton(stem) ? 'e' : '';

  return {
    [GermanPronounKeys.ich]: `${newStem}${weakEndings ? 'te' : defaultEnding}`,
    [GermanPronounKeys.du]: `${newStem}${weakEndings ? 'te' : defaultEnding}st`,
    [GermanPronounKeys.es]: `${newStem}${weakEndings ? 'te' : defaultEnding}`,
    [GermanPronounKeys.wir]: `${newStem}${weakEndings ? 't' : ''}en`,
    [GermanPronounKeys.ihr]: `${newStem}${weakEndings ? 'te' : defaultEnding}t`,
  };
}

function konjunktivConjugation(
  { stem, k2präsens }: { stem: string, k2präsens: string },
): { [key: string]: string } {
  const newStem = modifiedStem({ stem, irregularStem: k2präsens });

  return {
    [GermanPronounKeys.ich]: `${newStem}e`,
    [GermanPronounKeys.du]: `${newStem}est`,
    [GermanPronounKeys.es]: `${newStem}e`,
    [GermanPronounKeys.wir]: `${newStem}en`,
    [GermanPronounKeys.ihr]: `${newStem}et`,
  };
}

type PartizipConjugationType = {
  infinitiveStem: string;
  infinitive: string;
  partizip: string;
  präteritum: string;
  stemPartizip: string;
  weakEndings: boolean;
};

function partizipConjugation(
  {
    infinitiveStem, infinitive, partizip, präteritum, stemPartizip, weakEndings,
  }:
    PartizipConjugationType,
): string {
  if (partizip) {
    // even if there is a stem version, only accept the top level partizip
    return partizip;
  }

  if (stemPartizip) {
    const config = {
      stem: infinitiveStem,
      partizip: stemPartizip,
      infinitive,
      weakEndings,
    };

    if (!stemPartizip && präteritum && weakEndings) {
      return präteritum;
    }

    return irregularPartizipConjugation(config);
  }

  return `ge${infinitive}`;
}

export default function hydrateIrregularStems(
  { infinitiveStem, returnObject, verbConfiguration }:
    { infinitiveStem: string, returnObject: GermanVerbHydrated, verbConfiguration: GermanVerb },
) {
  const {
    infinitive, partizip, stems: {
      partizip: stemPartizip, duEs: duEsStem, präteritum, k2präsens,
    }, weakEndings,
  } = verbConfiguration;

  if (duEsStem) {
    const [newDu, newEs] = duEsConjugation({
      returnObject,
      duEsStem,
    });

    // tslint:disable no-string-literal
    returnObject[GermanTenses.präsens][GermanPronounKeys.du] = newDu;
    returnObject[GermanTenses.präsens][GermanPronounKeys.es] = newEs;
  }

  if (k2präsens) {
    returnObject[GermanTenses.konjunktiv] = konjunktivConjugation(
      { stem: infinitiveStem, k2präsens },
    );
  }

  if (präteritum) {
    returnObject[GermanTenses.präteritum] = präteritumConjugation(
      { stem: infinitiveStem, präteritum, weakEndings },
    );
  }

  returnObject.partizip = partizipConjugation({
    infinitiveStem, infinitive, partizip, präteritum, stemPartizip, weakEndings,
  });

  return returnObject;
}
