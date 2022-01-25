/* eslint-disable no-console */
import {
  GermanPronounKeys, GermanTenses, GermanVerb, GermanVerbHydrated,
} from '@german/germanTypes';
import irregularPartizipConjugation from './irregularPartizipConjugation';

import duEsConjugation from './hydrateDuEsConjugation';
import modifiedStem from './modifiedStem';

function präteritumConjugation(
  { stem, präteritum, strong }: { stem: string, präteritum: string, strong: boolean },
): { [key: string]: string } {
  const newStem = modifiedStem({ stem, irregularStem: präteritum });
  return {
    [GermanPronounKeys.ich]: `${newStem}${strong ? 'te' : ''}`,
    [GermanPronounKeys.du]: `${newStem}${strong ? 'te' : ''}st`,
    [GermanPronounKeys.es]: `${newStem}${strong ? 'te' : ''}`,
    [GermanPronounKeys.wir]: `${newStem}${strong ? 't' : ''}en`,
    [GermanPronounKeys.ihr]: `${newStem}${strong ? 'te' : ''}t`,
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
      stemPartizip,
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
      { stem: infinitiveStem, präteritum, strong: weakEndings },
    );
  }

  returnObject.partizip = partizipConjugation({
    infinitiveStem, infinitive, partizip, präteritum, stemPartizip, weakEndings,
  });

  return returnObject;
}
