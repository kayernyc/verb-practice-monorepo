import { GermanPronounKeys, GermanVerbHydrated } from '@german/germanTypes';
import { firstVowelGroupRegex } from '../germanConstants';

export default function duEsConjugation({
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
    präsens: { [GermanPronounKeys.du]: du, [GermanPronounKeys.es]: es },
  } = returnObject;

  return [du.replace(firstVowelGroupRegex, `$1${duEsStem}$3`), es.replace(firstVowelGroupRegex, `$1${duEsStem}$3`)];
}
