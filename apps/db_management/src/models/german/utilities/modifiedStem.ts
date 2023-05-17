import { RegExpGroups } from 'global-types';
import { syllableRegex } from 'german-types';

export const modifiedStem = (stem: string, irregularStem: string): string => {
  const irregularStemResult: RegExpGroups<
    'firstConst' | 'vowelGroup' | 'secondConst'
  > = syllableRegex.exec(irregularStem);

  const regularStemResult: RegExpGroups<
    'firstConst' | 'vowelGroup' | 'secondConst'
  > = syllableRegex.exec(stem);

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
