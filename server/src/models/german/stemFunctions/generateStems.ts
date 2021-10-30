// tslint:disable: no-console
import { GermanVerb } from '../germanTypes';

export default function generateStems({ infinitive }: GermanVerb) {
  // remove en or n ending
  const regularStem = infinitive.charAt(infinitive.length - 2) === 'e' ? infinitive.slice(0, -2) : infinitive.slice(0, -1);
  return regularStem;
}
