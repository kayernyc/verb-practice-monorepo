import { RegExpGroups } from 'global-types';

const geDetector =
  /(?<particleGe>ge)(?=[bcdfghjklmnpqrstvwxyzß][aeiouäöü][a-zß]*)/;

export function generateStems(infinitive: string): [string, string] {
  let particle = '';
  let regularStem = infinitive;

  if (regularStem.includes('|')) {
    regularStem = regularStem.slice(regularStem.indexOf('|') + 1);
  }

  // knien is an exception
  if (regularStem === 'knien') {
    return ['knie', ''];
  }

  // remove en or n ending
  regularStem =
    regularStem.charAt(infinitive.length - 2) === 'e'
      ? regularStem.slice(0, -2)
      : regularStem.slice(0, -1);

  if (regularStem.slice(0, 2) === 'ge') {
    const match: RegExpGroups<'particleGe'> = geDetector.exec(regularStem);

    if (match && match.groups?.particleGe) {
      regularStem = regularStem.slice(2);
      particle = 'ge';
    }
  }

  return [regularStem, particle];
}
