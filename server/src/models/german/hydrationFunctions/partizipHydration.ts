import verbIsInseparable from "../testFunctions/inseparable";
import { firstVowelGroupRegex } from '@german/germanConstants';

export default function partizipConjugation({ stem, partizip, präteritum, infinitive, weakEndings }: { stem: string, partizip?: string, präteritum?: string, infinitive: string, weakEndings?: boolean }) {
  if (verbIsInseparable(infinitive)) {
    return `${stem}t`
  }

  if (!partizip && !weakEndings && !präteritum && infinitive) {
    return `ge${infinitive}`;
  }

  if (weakEndings && präteritum && !partizip) {
    return stem.replace(firstVowelGroupRegex, `ge$1${präteritum}t`);
  }

  let builtStem = stem;
  if (partizip) {
    builtStem = stem.replace(firstVowelGroupRegex, `ge$1${partizip}$3`);
  }

  return `${builtStem}${weakEndings ? 'en' : 't'}`;
}