import fs from 'fs';
import path from 'path';

import {
  GermanTenses, GermanVerb, GermanVerbHydrated,
} from './germanTypes';
import { germanVerbData, JSON_DATA } from './germanVerbs';
import { firstVowelGroupRegex } from './germanConstants';
import irregularPartizipConjugation from './hydrationFunctions/irregularPartizipConjugation';
// tslint:disable: no-console

function importJsonData(): JSON_DATA {
  try {
    const jsonPath = path.resolve(__dirname, '..', '..', './data/germanVerbsUnhydrated.json');
    const data: string = fs.readFileSync(jsonPath, 'utf8');
    const parsedData: JSON_DATA = JSON.parse(data) as JSON_DATA;
    return parsedData;
  } catch (err) {
    return germanVerbData();
  }
}

const germanVerbs = importJsonData();

export function kranton(stem: string): boolean {
  if (stem.endsWith('d') || stem.endsWith('t')) return true;
  if (/\b[a-zß]+[aeiouäöü][m|n]{1,2}\b/.test(stem) || /\b[a-zß]+[aeiouäöü][l|r|h][m|n]\b/.test(stem)) return true; // ends with vowel (m|n), or vowel (mm | nn), or vowel {l | r | h} {m | n}

  return false;
}

function duEsConjugation({ returnObject, duEsStem }: {
  returnObject: GermanVerbHydrated,
  duEsStem: string
}): [string, string] {
  const { präsens: { du, es } } = returnObject;

  return [du.replace(firstVowelGroupRegex, `$1${duEsStem}$3`), es.replace(firstVowelGroupRegex, `$1${duEsStem}$3`)];
}

function präteritumConjugation(stem: string, präteritum: string): { [key: string]: string } {
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

function konjunktivConjugation(stem: string, k2präsens: string): { [key: string]: string } {
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

function createStandardConjugation({ returnObject, infinitive, infinitiveStem }:
  {
    returnObject: GermanVerbHydrated,
    infinitive: string,
    infinitiveStem: string
  }) {
  const newReturnObject: GermanVerbHydrated = { ...returnObject };
  newReturnObject[GermanTenses.präsens] = {
    ich: `${infinitiveStem}e`,
    du: `${infinitiveStem}st`,
    es: `${infinitiveStem}t`,
    wir: infinitive,
    ihr: `${infinitiveStem}t`,
  };

  newReturnObject[GermanTenses.konjunktiv] = {
    ich: `${infinitiveStem}e`,
    du: `${infinitiveStem}est`,
    es: `${infinitiveStem}e`,
    wir: infinitive,
    ihr: `${infinitiveStem}et`,
  };
  newReturnObject[GermanTenses.präteritum] = {
    ich: `${infinitiveStem}te`,
    du: `${infinitiveStem}test`,
    es: `${infinitiveStem}te`,
    wir: `${infinitiveStem}ten`,
    ihr: `${infinitiveStem}tet`,
  };
  return newReturnObject;
}

function standardHydration(verbConfiguration: GermanVerb): GermanVerbHydrated {
  // find stem
  const { infinitive } = verbConfiguration;
  const infinitiveStem = infinitive.slice(0, -2);
  const returnObject: GermanVerbHydrated = {
    partizip: `ge${infinitiveStem}t`,
  };

  createStandardConjugation({
    returnObject,
    infinitive,
    infinitiveStem,
  });

  if (verbConfiguration.stems) {
    // verb is strong
    const { stems, weakEndings } = verbConfiguration;
    const {
      partizip, duEs: duEsStem, präteritum, k2präsens,
    } = stems;

    if (duEsStem) {
      const [newDu, newEs] = duEsConjugation({
        returnObject,
        duEsStem,
      });

      // tslint:disable no-string-literal
      returnObject[GermanTenses.präsens].du = newDu;
      returnObject[GermanTenses.präsens].es = newEs;
      // tslint:enable no-string-literal

      if (partizip || verbConfiguration.strong) {
        const config = {
          stem: infinitiveStem, partizip, infinitive, weakEndings,
        };

        if (!partizip && (präteritum && weakEndings)) {
          config.partizip = präteritum;
        }
        returnObject.partizip = irregularPartizipConjugation(config);
      }
    }

    returnObject[GermanTenses.präteritum] = präteritumConjugation(infinitiveStem, präteritum);
    returnObject[GermanTenses.konjunktiv] = konjunktivConjugation(infinitiveStem, k2präsens);
  }

  return returnObject;
}

export function hydrateVerb(verbConfiguration: GermanVerb) {
  return standardHydration(verbConfiguration);
}

export const hydrateFromInfinitive = (infinitive: string, _germanVerbs?: JSON_DATA): string => {
  let germanVerbDictionary: JSON_DATA;

  if (_germanVerbs) {
    germanVerbDictionary = _germanVerbs;
  } else {
    germanVerbDictionary = germanVerbs;
  }

  const verbConfiguration: GermanVerb = germanVerbDictionary[infinitive] as GermanVerb;

  if (verbConfiguration) {
    return JSON.stringify(hydrateVerb(verbConfiguration));
  }
  return JSON.stringify(infinitive);
};
