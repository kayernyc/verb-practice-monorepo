import { GermanPronounKeys, GermanStems, GermanTenses, GermanVerb, GermanVerbHydrated } from "./germanTypes";
import germanVerbs from "../../data/germanVerbsUnhydrated.json";
// tslint:disable: no-console

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

export function kranton(stem: string): boolean {
  if (stem.endsWith('d') || stem.endsWith('t')) return true;
  if (/\b[a-zß]+[aeiouäöü][m|n]{1,2}\b/.test(stem) || /\b[a-zß]+[aeiouäöü][l|r|h][m|n]\b/.test(stem)) return true; // ends with vowel (m|n), or vowel (mm | nn), or vowel {l | r | h} {m | n}

  return false;
}

export const hydrateFromInfinitive = (infinitive: string, _germanVerbs: any = germanVerbs) => {
  const verbConfiguration = _germanVerbs[infinitive];

  if (verbConfiguration && verbConfiguration as GermanVerb) {
    return JSON.stringify(hydrateVerb(verbConfiguration))
    // return JSON.stringify(verbConfiguration);
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
  const regex = /\b([bcdfghjklmnpqrstvwxyzß]+)([aeiouäöü]+)([bcdfghjklmnpqrstvwxyzß][a-zß]+)\b/;
  const { präsens: { du, es } } = returnObject;

  return [du.replace(regex, `$1${duEsStem}$3`), es.replace(regex, `$1${duEsStem}$3`)];
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

function standardHydration(verbConfiguration: GermanVerb): GermanVerbHydrated {
  // find stem
  const infinitiveStem = verbConfiguration.infinitive.slice(0, -2);
  const returnObject: GermanVerbHydrated = {
    partizip: `${infinitiveStem}t`,
  };

  createStandardConjugation({
    returnObject,
    infinitive: verbConfiguration.infinitive,
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

    }

    returnObject[GermanTenses.präteritum] = präteritumConjugation(infinitiveStem, präteritum);
    returnObject[GermanTenses.konjunktiv] = konjunktivConjugation(infinitiveStem, k2präsens);
  }



  return returnObject
}