import { RegExpGroups } from 'global-types';

export const modifiedStem = (stem: string, irregularStem: string): string => {
  const irregularStemRegex =
    /\b(?<firstConst>[bcdfghjklmnpqrstvwxyzß]*)(?<vowelGroup>[aeiouäöü]*)(?<secondConst>[bcdfghjklmnpqrstvwxyzß]*)\b/;

  const irregularStemResult: RegExpGroups<
    'firstConst' | 'vowelGroup' | 'secondConst'
  > = irregularStemRegex.exec(irregularStem);

  const {
    firstConst: irregularStemFirstConst,
    vowelGroup: irregularStemVowelGroup,
    secondConst: irregularStemSecondGroup,
  } = irregularStemResult?.groups!;

  const regularStemResult: RegExpGroups<
    'firstConst' | 'vowelGroup' | 'secondConst'
  > = irregularStemRegex.exec(stem);

  const { firstConst, vowelGroup, secondConst } = regularStemResult?.groups!;

  if (irregularStemFirstConst && !irregularStemVowelGroup) {
    return `${firstConst || ''}${vowelGroup}${irregularStemFirstConst}`;
  }

  return `${irregularStemFirstConst || firstConst || ''}${
    irregularStemVowelGroup || vowelGroup || ''
  }${irregularStemSecondGroup || secondConst || ''}`;
};
