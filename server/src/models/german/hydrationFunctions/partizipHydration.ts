import verbIsInseparable from "../testFunctions/inseparable";
import { firstVowelGroupRegex } from '@german/germanConstants';

export default function partizipConjugation({ stem, partizip, infinitive, weakEndings }: { stem: string, partizip: string, infinitive: string, weakEndings?: boolean }) {
  if (verbIsInseparable(infinitive)) {
    return `${stem}`
  }
  // tslint:disable-next-line: no-console
  if (!partizip && infinitive) {
    return `ge${infinitive}`;
  }

  const builtStem = stem.replace(firstVowelGroupRegex, `ge$1${partizip}$3`);
  return `${builtStem}${weakEndings ? 'en' : 't'}`;
}