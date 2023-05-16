import verbIsInseparable from '../propertyTestFunctions/inseparable';
import { processStemSubstitution } from '@germanUtilities/processStemSubstitution';

export function hydrateIrregularPartizipConjugation({
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
  if (!partizip) {
    if (weakEndings && präteritum) {
      const newStem = processStemSubstitution({
        regularStem: stem,
        irregularStem: präteritum,
      });
      return `ge${newStem}t`;
    }
  }

  let builtStem = stem;
  if (partizip) {
    builtStem = processStemSubstitution({
      regularStem: stem,
      irregularStem: partizip,
    });
    if (verbIsInseparable(infinitive)) {
      return `${builtStem}t`;
    }
    builtStem = `${verbIsInseparable(infinitive) ? '' : 'ge'}${builtStem}`;
  }

  return `${builtStem}${
    weakEndings || verbIsInseparable(infinitive) ? 't' : 'en'
  }`;
}
