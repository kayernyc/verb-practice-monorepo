import fs from 'fs';
import path from 'path';

import { GermanTenses, GermanVerb, GermanVerbHydrated } from './germanTypes';
import { germanVerbData, JSON_DATA } from './germanVerbs';
import hydrateIrregularStems from './hydrationFunctions/hydrateIrregularStems';

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

function createStandardConjugation({
  returnObject,
  infinitive,
  infinitiveStem,
}: {
  returnObject: GermanVerbHydrated;
  infinitive: string;
  infinitiveStem: string;
}): GermanVerbHydrated {
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

function addStrongFeatures(
  { infinitiveStem, returnObject, verbConfiguration }:
    { infinitiveStem: string, returnObject: GermanVerbHydrated, verbConfiguration: GermanVerb },
) {
  const {
    infinitive,
    irregular,
    languages,
    partizip,
    stems,
    weakEndings,
  } = verbConfiguration;

  if (stems) {
    hydrateIrregularStems({ infinitiveStem, returnObject, verbConfiguration });
  }

  console.log(returnObject, verbConfiguration);
}

function standardHydration(verbConfiguration: GermanVerb): GermanVerbHydrated {
  // find stem
  const { infinitive, strong } = verbConfiguration;
  const infinitiveStem = infinitive.slice(0, -2);
  let returnObject: GermanVerbHydrated = {
    partizip: `ge${infinitiveStem}t`,
  };

  returnObject = createStandardConjugation({
    returnObject,
    infinitive,
    infinitiveStem,
  });

  if (strong) {
    addStrongFeatures({ returnObject, verbConfiguration, infinitiveStem });
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
