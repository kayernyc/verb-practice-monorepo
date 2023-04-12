/* eslint-disable no-console */
import {
  GermanPronounKeys, GermanTenses, GermanVerb, GermanVerbHydrated,
} from '@german/germanTypes';
import irregularPartizipConjugation from './irregularPartizipConjugation';
import kranton from '../propertyTestFunctions/kranton';

import duEsConjugation from './hydrateDuEsConjugation';
import modifiedStem from './modifiedStem';

const singleVowelNoUmlaut = /(?<firstConst>[bcdfghjklmnpqrstvwxyzß]*)(?<vowel>(?<![aou])[aou](?![aou]))(?<rest>[bcdfghjklmnpqrstvwxyzß]+[a-zß]*)/;
const umlautVersions: { [key: string]: string } = {
  a: 'ä',
  o: 'ö',
  u: 'ü',
};

type PartizipConjugationType = {
  infinitiveStem: string;
  infinitive: string;
  partizip: string;
  präteritum: string;
  stemPartizip: string;
  weakEndings: boolean;
};

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
  { stem, konjunktiv }: { stem: string, konjunktiv: string },
): { [key: string]: string } {
  const newStem = modifiedStem({ stem, irregularStem: konjunktiv });
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
}

function konjunktiv2Conjugation(
  { stem, irregularStem, weakEndings }:
    { stem: string, irregularStem: string, weakEndings: boolean },
): { [key: string]: string } {
  let newStem = modifiedStem({ stem, irregularStem });
  let defaultEnding = 'e';
  /*
  A completely regular strong verb will form
  its K2 stem by applying an umlaut to the vowels
  in past stem if the vowels are capable of
  taking an umlaut, or using the past stem
  unchanged otherwise (RULE2).
  */
  const match = singleVowelNoUmlaut.exec(newStem);
  if (match?.groups) {
    const { groups: { firstConst, vowel, rest } } = match;
    if (vowel && umlautVersions[vowel]) {
      newStem = `${firstConst}${umlautVersions[vowel]}${rest || ''}`;
    }
  }

  if (weakEndings) { // does new have a single vowel that can take an umlaut?
    defaultEnding = 'te';
  }

  return {
    [GermanPronounKeys.ich]: `${newStem}${defaultEnding}`,
    [GermanPronounKeys.du]: `${newStem}${defaultEnding}st`,
    [GermanPronounKeys.es]: `${newStem}${defaultEnding}`,
    [GermanPronounKeys.wir]: `${newStem}${defaultEnding}n`,
    [GermanPronounKeys.ihr]: `${newStem}${defaultEnding}t`,
  };
}

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
      partizip: stemPartizip, duEs: duEsStem, präteritum, k2präsens, konjunktiv,
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

  returnObject[GermanTenses.konjunktiv] = konjunktivConjugation(
    { stem: infinitiveStem, konjunktiv },
  );

  if (k2präsens || präteritum || weakEndings) {
    returnObject[GermanTenses.k2präsens] = konjunktiv2Conjugation(
      { stem: infinitiveStem, irregularStem: (k2präsens || präteritum), weakEndings },
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
