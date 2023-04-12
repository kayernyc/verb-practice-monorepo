import fs from 'fs';
import path from 'path';

import kranton from '@german/propertyTestFunctions/kranton';
import { GermanJsonData } from '@models/jsonTypes';
import { findRelativePathToData } from '@models/shared/readYaml';
import {
  GermanPronounKeys,
  GermanSeparableVerb,
  GermanTenses,
  GermanVerb,
  GermanVerbTypeGuard,
  GermanVerbHydrated,
} from './germanTypes';
import { germanVerbData } from './germanBuildJsonFromYml';
import hydrateIrregularStems from './hydrationFunctions/hydrateIrregularStems';

function importJsonData(): GermanJsonData {
  try {
    const dataPath = findRelativePathToData(__dirname);

    const fileContents = fs.readFileSync(path.join(dataPath, 'germanVerbsUnhydrated.json'), 'utf8');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsedData: GermanJsonData = JSON.parse(fileContents) as GermanJsonData;
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
  const germanVerbDictionary = _germanVerbs?.verbs ?? germanVerbs.verbs;
  const verbConfiguration = germanVerbDictionary[infinitive];

  // console.log({ verbConfiguration }, 'from hydrate', GermanVerbTypeGuard(verbConfiguration));

  if (verbConfiguration && GermanVerbTypeGuard(verbConfiguration)) {
    return hydrateVerb(verbConfiguration);
  }
  return infinitive;
};

export function hydrateSeparableVerb(verbConfiguration: GermanSeparableVerb) {
  const { base, particle } = verbConfiguration;
  const baseConfig = hydrateFromInfinitive(base);

  if (baseConfig && typeof baseConfig !== 'string') {
    baseConfig.infinitive = `${particle}${base}`;
    const newPartizip = baseConfig.partizip.slice(0, 2) === 'ge' ? baseConfig.partizip.slice(2) : baseConfig.partizip;
    baseConfig.partizip = `${particle}ge${newPartizip}`;

    [
      GermanTenses.präsens, GermanTenses.präteritum,
      GermanTenses.konjunktiv, GermanTenses.k2präsens,
    ].forEach((tense: GermanTenses) => {
      const currentTense = baseConfig[tense];
      [
        GermanPronounKeys.ich, GermanPronounKeys.du,
        GermanPronounKeys.es, GermanPronounKeys.wir, GermanPronounKeys.ihr,
      ].forEach((person) => {
        currentTense[person] = `${currentTense[person]} ${particle}`;
      });
    });
  }

  return baseConfig;
}
