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

  const inseparable = verbIsInseparable(infinitive);

  let builtStem = stem;
  if (partizip) {
    builtStem = processStemSubstitution({
      regularStem: stem,
      irregularStem: partizip,
    });

    builtStem = `${inseparable ? '' : 'ge'}${builtStem}`;
  }

  return `${builtStem}${weakEndings || inseparable ? 't' : 'en'}`;
}
