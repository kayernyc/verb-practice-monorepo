import { GermanStems, GermanTenses, GermanVerb, GermanVerbHydrated } from "./germanTypes";
import germanVerbs from "../../data/germanVerbsUnhydrated.json";

export const hydrateFromInfinitive = (infinitive: string) => {
  const verbConfiguration = germanVerbs[infinitive];

  if (verbConfiguration && verbConfiguration as GermanVerb) {
    return JSON.stringify(hydrateVerb(verbConfiguration))
    // return JSON.stringify(verbConfiguration);
  }

  return JSON.stringify(infinitive);
}

export function hydrateVerb(verbConfiguration: GermanVerb) {
  return standardHydration(verbConfiguration);
}

export function findStems(verbConfiguration: GermanVerb): { GermanStems?: string } & { infinitiveStem: string } {
  const stem = verbConfiguration.infinitive.slice(0, -2);

  const returnValue = {
    'infinitiveStem': stem,
  }

  returnValue[GermanStems.duEs] = 'bob'
  returnValue[GermanStems.k2präsens] = 'bob'
  returnValue[GermanStems.partizip] = 'bob'

  return returnValue;
}

function standardHydration(verbConfiguration: GermanVerb): GermanVerbHydrated {
  // find stem
  const stems = findStems(verbConfiguration);
  const partizip = stems[GermanStems.partizip];
  const duEs = stems[GermanStems.duEs];
  const { infinitiveStem } = stems

  const returnObj = {
    partizip: `${partizip}t`
  };
  returnObj[GermanTenses.präsens] = {
    'ich': `${infinitiveStem}e`,
    'du': `${infinitiveStem}st`,
    'es': `${infinitiveStem}t`,
    'wir': verbConfiguration.infinitive,
    'ihr': `${infinitiveStem}`
  }
  returnObj[GermanTenses.präteritum] = {
    'ich': `${infinitiveStem}te`,
    'du': `${infinitiveStem}test`,
    'es': `${infinitiveStem}te`,
    'wir': `${infinitiveStem}ten`,
    'ihr': `${infinitiveStem}tet`
  }
  returnObj[GermanTenses.konjunktiv] = {
    'ich': `${infinitiveStem}e`,
    'du': `${infinitiveStem}est`,
    'es': `${infinitiveStem}e`,
    'wir': verbConfiguration.infinitive,
    'ihr': `${infinitiveStem}et`
  }

  return returnObj
}