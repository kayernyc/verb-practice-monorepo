import { RegExpGroups } from 'global-types';

export const modifiedStem = (stem: string, irregularStem: string): string => {
  const irregularStemRegex =
    /(?<firstConst>[bcdfghjklmnpqrstvwxyzß]*)(?<vowelGroup>[aeiouäöü]*)(?<secondConst>[bcdfghjklmnpqrstvwxyzß]*)/;

  const irregularStemResult: RegExpGroups<
    'firstConst' | 'vowelGroup' | 'secondConst'
  > = irregularStemRegex.exec(irregularStem);

  const regularStemResult: RegExpGroups<
    'firstConst' | 'vowelGroup' | 'secondConst'
  > = irregularStemRegex.exec(stem);

  if (regularStemResult?.groups && irregularStemResult?.groups) {
    const {
      firstConst: irregularStemFirstConst,
      vowelGroup: irregularStemVowelGroup,
      secondConst: irregularStemSecondGroup,
    } = irregularStemResult?.groups!;

    const { firstConst, vowelGroup, secondConst } = regularStemResult?.groups!;

    if (irregularStemFirstConst && !irregularStemVowelGroup) {
      return `${firstConst || ''}${vowelGroup}${irregularStemFirstConst}`;
    }

    return `${irregularStemFirstConst || firstConst || ''}${
      irregularStemVowelGroup || vowelGroup || ''
    }${irregularStemSecondGroup || secondConst || ''}`;
  }

  throw Error(`${stem} did not pass regex.`);
};
