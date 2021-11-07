import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

import { GermanPronounKeys, GermanStems, GermanTenses, GermanVerb, GermanVerbHydrated } from "./germanTypes";
import { germanVerbData } from './germanVerbs';
import verbIsInseparable from "./testFunctions/inseparable";
// tslint:disable: no-console

async function importJsonData() {
  try {
    const jsonPath = path.resolve(__dirname, '..', '..', './data/germanVerbsUnhydrated.json');
    const data = fs.readFileSync(jsonPath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return await germanVerbData();
  }
}

const germanVerbs = importJsonData();

const consonents = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
  "ß"
];

const firstVowelGroupRegex = /\b([bcdfghjklmnpqrstvwxyzß]+)([aeiouäöü]+)([bcdfghjklmnpqrstvwxyzß][a-zß]+)\b/;

export function kranton(stem: string): boolean {
  if (stem.endsWith('d') || stem.endsWith('t')) return true;
  if (/\b[a-zß]+[aeiouäöü][m|n]{1,2}\b/.test(stem) || /\b[a-zß]+[aeiouäöü][l|r|h][m|n]\b/.test(stem)) return true; // ends with vowel (m|n), or vowel (mm | nn), or vowel {l | r | h} {m | n}

  return false;
}

export const hydrateFromInfinitive = async (infinitive: string, _germanVerbs?: any) => {
  let germanVerbDictionary;

  if (_germanVerbs) {
    germanVerbDictionary = _germanVerbs;
  } else {
    germanVerbDictionary = await germanVerbs;
  }

  const verbConfiguration = germanVerbDictionary[infinitive];

  if (verbConfiguration && verbConfiguration as GermanVerb) {
    return JSON.stringify(hydrateVerb(verbConfiguration))
  }
  return JSON.stringify(infinitive);
}

export function hydrateVerb(verbConfiguration: GermanVerb) {
  return standardHydration(verbConfiguration);
}

function createStandardConjugation({ returnObject, infinitive, infinitiveStem }: { returnObject: GermanVerbHydrated, infinitive: string, infinitiveStem: string }) {
  returnObject[GermanTenses.präsens] = {
    'ich': `${infinitiveStem}e`,
    'du': `${infinitiveStem}st`,
    'es': `${infinitiveStem}t`,
    'wir': infinitive,
    'ihr': `${infinitiveStem}t`
  }

  returnObject[GermanTenses.konjunktiv] = {
    'ich': `${infinitiveStem}e`,
    'du': `${infinitiveStem}est`,
    'es': `${infinitiveStem}e`,
    'wir': infinitive,
    'ihr': `${infinitiveStem}et`
  }
  returnObject[GermanTenses.präteritum] = {
    'ich': `${infinitiveStem}te`,
    'du': `${infinitiveStem}test`,
    'es': `${infinitiveStem}te`,
    'wir': `${infinitiveStem}ten`,
    'ihr': `${infinitiveStem}tet`
  }
  return returnObject;
}

function duEsConjugation({ returnObject, duEsStem }: { returnObject: GermanVerbHydrated, duEsStem: string }): [string, string] {
  const { präsens: { du, es } } = returnObject;

  return [du.replace(firstVowelGroupRegex, `$1${duEsStem}$3`), es.replace(firstVowelGroupRegex, `$1${duEsStem}$3`)];
}

function präteritumConjugation(stem, präteritum) {
  if (präteritum) {
    const regex = /\b([bcdfghjklmnpqrstvwxyzß]+)([a-zß]+)\b/;
    stem = stem.replace(regex, `$1${präteritum}`);
  }

  return {
    'ich': `${stem}`,
    'du': `${stem}st`,
    'es': `${stem}`,
    'wir': `${stem}en`,
    'ihr': `${stem}t`
  }
}

function konjunktivConjugation(stem, k2präsens) {
  if (k2präsens) {
    const regex = /\b([bcdfghjklmnpqrstvwxyzß]+)([a-zß]+)\b/;
    stem = stem.replace(regex, `$1${k2präsens}`);
  }

  return {
    'ich': `${stem}e`,
    'du': `${stem}est`,
    'es': `${stem}e`,
    'wir': `${stem}en`,
    'ihr': `${stem}et`
  }
}

function partizipConjugation(stem, partizip, infinitive) {
  if (verbIsInseparable(infinitive)) {
    return `${stem}`
  }

  if (!partizip && infinitive) {
    return `ge${infinitive}`;
  }

  return infinitive.replace(firstVowelGroupRegex, stem);
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
    infinitiveStem
  });

  if (verbConfiguration.stems) {
    // verb is strong
    const { stems } = verbConfiguration;
    const { partizip, duEs: duEsStem, präteritum, k2präsens } = stems;

    if (duEsStem) {
      const [newDu, newEs] = duEsConjugation({
        returnObject,
        duEsStem
      });

      // tslint:disable no-string-literal
      returnObject[GermanTenses.präsens]['du'] = newDu;
      returnObject[GermanTenses.präsens]['es'] = newEs;
      // tslint:enable no-string-literal

      if (partizip || verbConfiguration.strong) {
        returnObject.partizip = partizipConjugation(infinitiveStem, partizip, infinitive)
      }
    }

    returnObject[GermanTenses.präteritum] = präteritumConjugation(infinitiveStem, präteritum);
    returnObject[GermanTenses.konjunktiv] = konjunktivConjugation(infinitiveStem, k2präsens);
  }

  return returnObject
}