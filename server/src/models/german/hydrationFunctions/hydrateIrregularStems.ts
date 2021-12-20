import { GermanTenses, GermanVerb, GermanVerbHydrated } from '@german/germanTypes';
import irregularPartizipConjugation from './irregularPartizipConjugation';

import { firstVowelGroupRegex } from '../germanConstants';

function duEsConjugation({
  returnObject,
  duEsStem,
}: {
  returnObject: GermanVerbHydrated;
  duEsStem: string;
}): [string, string] {
  if (!returnObject.präsens) {
    throw new Error('NO PRÄSENS');
  }
  const {
    präsens: { du, es },
  } = returnObject;

  return [du.replace(firstVowelGroupRegex, `$1${duEsStem}$3`), es.replace(firstVowelGroupRegex, `$1${duEsStem}$3`)];
}

function präteritumConjugation(
  { stem, präteritum }: { stem: string, präteritum: string },
): { [key: string]: string } {
  let modifiableStem = stem;
  if (präteritum) {
    const regex = /\b([bcdfghjklmnpqrstvwxyzß]+)([a-zß]+)\b/;
    modifiableStem = modifiableStem.replace(regex, `$1${präteritum}`);
  }

  return {
    ich: `${modifiableStem}`,
    du: `${modifiableStem}st`,
    es: `${modifiableStem}`,
    wir: `${modifiableStem}en`,
    ihr: `${modifiableStem}t`,
  };
}

function konjunktivConjugation(
  { stem, k2präsens }: { stem: string, k2präsens: string },
): { [key: string]: string } {
  let modifiableStem = stem;
  if (k2präsens) {
    const regex = /\b([bcdfghjklmnpqrstvwxyzß]+)([a-zß]+)\b/;
    modifiableStem = modifiableStem.replace(regex, `$1${k2präsens}`);
  }

  return {
    ich: `${modifiableStem}e`,
    du: `${modifiableStem}est`,
    es: `${modifiableStem}e`,
    wir: `${modifiableStem}en`,
    ihr: `${modifiableStem}et`,
  };
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
    returnObject[GermanTenses.präsens].du = newDu;
    returnObject[GermanTenses.präsens].es = newEs;
  }

  if (k2präsens) {
    returnObject[GermanTenses.konjunktiv] = konjunktivConjugation(
      { stem: infinitiveStem, k2präsens },
    );
  }

  if (präteritum) {
    returnObject[GermanTenses.präteritum] = präteritumConjugation(
      { stem: infinitiveStem, präteritum },
    );
  }

  // tslint:enable no-string-literal
  if (stemPartizip || verbConfiguration.strong) {
    const config = {
      stem: infinitiveStem,
      stemPartizip,
      infinitive,
      weakEndings,
    };

    returnObject.partizip = irregularPartizipConjugation(config);

    if (!stemPartizip && präteritum && weakEndings) {
      config.stemPartizip = präteritum;
    }
  }

  return returnObject;
}
