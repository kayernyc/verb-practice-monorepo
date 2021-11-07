// tslint:disable: no-console
import { GermanVerb } from '../germanTypes';
import verbIsInseparable from '../testFunctions/inseparable';
import { inseperableRegex } from '../germanConstants';

export default function generateStems({ infinitive }: GermanVerb): string {
  let regularStem = infinitive
  // remove prefix if it exists
  // if (verbIsInseparable(infinitive)) {
  //   // remove "inseparable prefix" and return stem
  //   const [, , stem] = infinitive.match(inseperableRegex)
  //   regularStem = stem;
  // }

  if (regularStem.includes('|')) {
    regularStem = regularStem.slice(regularStem.indexOf('|') + 1);
  }

  // remove en or n ending
  regularStem = regularStem.charAt(infinitive.length - 2) === 'e' ? regularStem.slice(0, -2) : regularStem.slice(0, -1);

  return regularStem;
}
