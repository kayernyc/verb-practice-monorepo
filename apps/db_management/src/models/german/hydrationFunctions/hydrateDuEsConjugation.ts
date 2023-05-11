import { GermanPronounCode } from 'german-types';
import { RegExpGroups } from 'global-types';

const irregularStemRegex =
  /(?<firstConst>[bcdfghjklmnpqrstvwxyzß]*)(?<vowelGroup>[aeiouäöü]*)(?<secondConst>[bcdfghjklmnpqrstvwxyzß]*)/;
const regularStemRegex =
  /(?<firstConst>[bcdfghjklmnpqrstvwxyzß]*)(?<vowelGroup>[aeiouäöü]*)(?<secondConst>[a-zß]*)/;

export const hydrateDuEsConjugation = (
  duEsStem: string,
  tense: Record<GermanPronounCode, string>,
): [string, string] => {
  const du = tense[GermanPronounCode.du];
  const es = tense[GermanPronounCode.es];

  let irregularStemFirstConst = '';
  let irregularStemVowelGroup = '';
  let irregularStemSecondGroup = '';

  const irregularStemResult: RegExpGroups<
    'firstConst' | 'vowelGroup' | 'secondConst'
  > = irregularStemRegex.exec(duEsStem);

  if (irregularStemResult) {
    irregularStemFirstConst = irregularStemResult.groups!.firstConst;
    irregularStemVowelGroup = irregularStemResult.groups!.vowelGroup;
    irregularStemSecondGroup = irregularStemResult.groups!.secondConst;
  }
  function processStem({
    regularStem,
    ending,
  }: {
    regularStem: string;
    ending: string;
  }) {
    let firstConst: string;
    let vowelGroup: string;
    let secondConst: string;

    const regularResult: RegExpGroups<
      'firstConst' | 'vowelGroup' | 'secondConst'
    > = regularStemRegex.exec(regularStem);

    if (regularResult) {
      firstConst = regularResult.groups!.firstConst;
      vowelGroup = regularResult.groups!.vowelGroup;
      secondConst = regularResult.groups!.secondConst;
    } else {
      throw Error(`duEs for ${tense} failed regex test.`);
    }

    if (irregularStemFirstConst && !irregularStemSecondGroup) {
      return `${irregularStemFirstConst}${
        irregularStemVowelGroup || vowelGroup
      }${ending}`;
    }

    if (!irregularStemFirstConst && irregularStemSecondGroup) {
      return `${firstConst}${irregularStemVowelGroup}${irregularStemSecondGroup}${ending}`;
    }

    return `${irregularStemFirstConst || firstConst}${
      irregularStemVowelGroup || vowelGroup
    }${irregularStemSecondGroup || secondConst}`;
  }

  return [
    processStem({ regularStem: du, ending: 'st' }),
    processStem({ regularStem: es, ending: 't' }),
  ];
};
