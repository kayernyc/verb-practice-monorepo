import { firstVowelGroupRegex } from 'german-types';
import verbIsInseparable from '../propertyTestFunctions/inseparable';
import { processStemSubstitution } from './processStemSubstitution';

export function irregularPartizipConjugation({
  stem,
  partizip,
  präteritum,
  infinitive,
  weakEndings,
}: {
  stem: string;
  partizip?: string;
  präteritum?: string;
  infinitive: string;
  weakEndings?: boolean;
}) {
  if (verbIsInseparable(infinitive)) {
    return `${stem}t`;
  }

  if (!partizip) {
    if (weakEndings && präteritum) {
      const newStem = processStemSubstitution({
        regularStem: stem,
        irregularStem: präteritum,
      });
      return `ge${newStem}t`;
      // return stem.replace(firstVowelGroupRegex, `ge$1${präteritum}t`);
    }

    if (!weakEndings && !präteritum) {
      return `ge${infinitive}`;
    }
  }

  let builtStem = stem;
  if (partizip) {
    builtStem = processStemSubstitution({
      regularStem: stem,
      irregularStem: partizip,
    });
    builtStem = `ge${builtStem}`;
  }

  return `${builtStem}${weakEndings ? 't' : 'en'}`;
}
