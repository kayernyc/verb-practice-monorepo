import verbIsInseparable from "../testFunctions/inseparable";
import { firstVowelGroupRegex } from '@german/germanConstants';

export default function partizipConjugation(stem, partizip, infinitive) {
  if (verbIsInseparable(infinitive)) {
    return `${stem}`
  }

  if (!partizip && infinitive) {
    return `ge${infinitive}`;
  }

  return infinitive.replace(firstVowelGroupRegex, stem);
}