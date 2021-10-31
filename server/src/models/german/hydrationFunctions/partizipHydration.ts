import verbIsInseparable from "@german/testFunctions/inseparable";
import { firstVowelGroupRegex } from '@german/germanConstants';

export function partizipConjugation(stem, partizip, infinitive) {
  if (verbIsInseparable(infinitive)) {
    return `${stem}`
  }

  if (!partizip && infinitive) {
    return `ge${infinitive}`;
  }

  return infinitive.replace(firstVowelGroupRegex, stem);
}