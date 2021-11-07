import verbIsInseparable from "../testFunctions/inseparable";
import { firstVowelGroupRegex } from '@german/germanConstants';

export default function partizipConjugation(stem, partizip, infinitive) {
  if (verbIsInseparable(infinitive)) {
    return `${stem}`
  }
  // tslint:disable-next-line: no-console
  console.log(partizip);

  if (!partizip && infinitive) {
    return `ge${infinitive}`;
  }

  return stem.replace(firstVowelGroupRegex, `ge$1${partizip}$3t`);
}