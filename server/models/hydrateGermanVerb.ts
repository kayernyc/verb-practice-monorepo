import { GermanTenses, GermanVerb, GermanVerbHydrated } from "./germanTypes";
import germanVerbs from "../data/germanVerbsUnhydrated.json";

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

function standardHydration(verbConfiguration: GermanVerb): GermanVerbHydrated {
  // find stem
  const stem = verbConfiguration.infinitive.slice(0, -2)
  // tslint:disable-next-line: no-console
  const returnObj = {
    partizip: `${stem}t`
  };
  returnObj[GermanTenses.präsens] = {
    'ich': `${stem}e`,
    'du': `${stem}st`,
    'es': `${stem}t`,
    'wir': verbConfiguration.infinitive,
    'ihr': `${stem}`
  }
  returnObj[GermanTenses.präteritum] = {
    'ich': `${stem}te`,
    'du': `${stem}test`,
    'es': `${stem}te`,
    'wir': `${stem}ten`,
    'ihr': `${stem}tet`
  }
  returnObj[GermanTenses.konjunktiv] = {
    'ich': `${stem}e`,
    'du': `${stem}est`,
    'es': `${stem}e`,
    'wir': verbConfiguration.infinitive,
    'ihr': `${stem}et`
  }

  return returnObj
}