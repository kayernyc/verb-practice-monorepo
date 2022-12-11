import fs from 'fs';
import path from 'path';

import kranton from '@german/propertyTestFunctions/kranton';
import { GermanJsonData } from '@models/jsonTypes';
import {
  GermanPronounKeys, GermanTenses, GermanVerb, GermanVerbHydrated,
} from './germanTypes';
import { germanVerbData } from './germanBuildJsonFromYml';
import hydrateIrregularStems from './hydrationFunctions/hydrateIrregularStems';

function importJsonData(): GermanJsonData {
  try {
    const jsonPath = path.resolve(__dirname, '..', '..', './data/germanVerbsUnhydrated.json');
    const data: string = fs.readFileSync(jsonPath, 'utf8');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsedData: GermanJsonData = JSON.parse(data) as GermanJsonData;
    return parsedData;
  } catch (err) {
    return germanVerbData();
  }
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const germanVerbs: GermanJsonData = importJsonData();

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

  const defaultEnding = kranton(infinitiveStem) ? 'e' : '';

  newReturnObject[GermanTenses.präsens] = {
    [GermanPronounKeys.ich]: `${infinitiveStem}e`,
    [GermanPronounKeys.du]: `${infinitiveStem}${defaultEnding}st`,
    [GermanPronounKeys.es]: `${infinitiveStem}${defaultEnding}t`,
    [GermanPronounKeys.wir]: infinitive,
    [GermanPronounKeys.ihr]: `${infinitiveStem}${defaultEnding}t`,
  };

  newReturnObject[GermanTenses.konjunktiv] = {
    [GermanPronounKeys.ich]: `${infinitiveStem}e`,
    [GermanPronounKeys.du]: `${infinitiveStem}est`,
    [GermanPronounKeys.es]: `${infinitiveStem}e`,
    [GermanPronounKeys.wir]: infinitive,
    [GermanPronounKeys.ihr]: `${infinitiveStem}et`,
  };

  newReturnObject[GermanTenses.präteritum] = {
    [GermanPronounKeys.ich]: `${infinitiveStem}te`,
    [GermanPronounKeys.du]: `${infinitiveStem}test`,
    [GermanPronounKeys.es]: `${infinitiveStem}te`,
    [GermanPronounKeys.wir]: `${infinitiveStem}ten`,
    [GermanPronounKeys.ihr]: `${infinitiveStem}tet`,
  };

  newReturnObject[GermanTenses.k2präsens] = {
    [GermanPronounKeys.ich]: `${infinitiveStem}te`,
    [GermanPronounKeys.du]: `${infinitiveStem}test`,
    [GermanPronounKeys.es]: `${infinitiveStem}te`,
    [GermanPronounKeys.wir]: `${infinitiveStem}ten`,
    [GermanPronounKeys.ihr]: `${infinitiveStem}tet`,
  };

  return newReturnObject;
}

function addStrongFeatures(
  { infinitiveStem, returnObject, verbConfiguration }:
    { infinitiveStem: string, returnObject: GermanVerbHydrated, verbConfiguration: GermanVerb },
) {
  const { irregular, stems } = verbConfiguration;

  if (stems) {
    hydrateIrregularStems({ infinitiveStem, returnObject, verbConfiguration });
  }

  if (irregular) {
    Object.keys(irregular).forEach((key: string) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      returnObject[key] = { ...returnObject[key], ...irregular[key] };
    });
  }
}

function standardHydration(verbConfiguration: GermanVerb): GermanVerbHydrated {
  // find stem
  const { hilfsverb, infinitive, strong } = verbConfiguration;
  const infinitiveStem = infinitive.slice(0, -2);
  let returnObject: GermanVerbHydrated = {
    language: 'de',
    hilfsverb,
    infinitive,
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

export const hydrateFromInfinitive = (
  infinitive: string,
  _germanVerbs?: GermanJsonData,
): string | GermanVerbHydrated => {
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const germanVerbDictionary = _germanVerbs?.verbs ?? germanVerbs.verbs;

  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const verbConfiguration: GermanVerb = germanVerbDictionary[infinitive];

  if (verbConfiguration) {
    return hydrateVerb(verbConfiguration);
  }
  return infinitive;
};
