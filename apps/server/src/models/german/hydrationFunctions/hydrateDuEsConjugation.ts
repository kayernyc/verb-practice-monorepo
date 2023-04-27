import { GermanPronounKeys, GermanVerbHydrated } from '@german/germanTypes';

const irregularStemRegex =
  /(?<firstConst>[bcdfghjklmnpqrstvwxyzß]*)(?<vowelGroup>[aeiouäöü]*)(?<secondConst>[bcdfghjklmnpqrstvwxyzß]*)/;
const regularStemRegex =
  /(?<firstConst>[bcdfghjklmnpqrstvwxyzß]*)(?<vowelGroup>[aeiouäöü]*)(?<secondConst>[a-zß]*)/;

export default function duEsConjugation({
  returnObject,
  duEsStem,
}: {
  returnObject: GermanVerbHydrated;
  duEsStem: string;
}): [string, string] {
  if (!returnObject.präsens) {
    throw Error('NO PRÄSENS');
  }

  const {
    präsens: { [GermanPronounKeys.du]: du, [GermanPronounKeys.es]: es },
  } = returnObject;

  const {
    groups: {
      firstConst: irregularStemFirstConst,
      vowelGroup: irregularStemVowelGroup,
      secondConst: irregularStemSecondGroup,
    },
  } = irregularStemRegex.exec(duEsStem);

  function processStem({ regularStem, ending }: { regularStem: string; ending: string }) {
    const {
      groups: { firstConst, vowelGroup, secondConst },
    } = regularStemRegex.exec(regularStem);

    if (irregularStemFirstConst && !irregularStemSecondGroup) {
      return `${irregularStemFirstConst}${irregularStemVowelGroup || vowelGroup}${ending}`;
    }

    if (!irregularStemFirstConst && irregularStemSecondGroup) {
      return `${firstConst}${irregularStemVowelGroup}${irregularStemSecondGroup}${ending}`;
    }

    return `${irregularStemFirstConst || firstConst}${irregularStemVowelGroup || vowelGroup}${
      irregularStemSecondGroup || secondConst
    }`;
  }

  return [
    processStem({ regularStem: du, ending: 'st' }),
    processStem({ regularStem: es, ending: 't' }),
  ];
}
