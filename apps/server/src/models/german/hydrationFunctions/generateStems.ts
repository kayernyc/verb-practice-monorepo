import { GermanVerb } from '../germanTypes';

export default function generateStems({ infinitive }: GermanVerb): string {
  let regularStem = infinitive;

  if (regularStem.includes('|')) {
    regularStem = regularStem.slice(regularStem.indexOf('|') + 1);
  }

  // knien is an exception
  if (regularStem === 'knien') {
    return 'knie';
  }

  // remove en or n ending
  regularStem =
    regularStem.charAt(infinitive.length - 2) === 'e'
      ? regularStem.slice(0, -2)
      : regularStem.slice(0, -1);

  return regularStem;
}
