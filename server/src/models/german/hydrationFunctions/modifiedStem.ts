export default function modifiedStem(
  { stem, irregularStem }: { stem: string, irregularStem: string },
): string {
  const irregularStemRegex = /\b(?<firstConst>[bcdfghjklmnpqrstvwxyzß]*)(?<vowelGroup>[aeiouäöü]*)(?<secondConst>[bcdfghjklmnpqrstvwxyzß]*)\b/;
  const {
    groups: {
      firstConst: irregularStemFirstConst,
      vowelGroup: irregularStemVowelGroup,
      secondConst: irregularStemSecondGroup,
    },
  } = irregularStemRegex.exec(irregularStem);

  const {
    groups: {
      firstConst,
      vowelGroup,
      secondConst,
    },
  } = irregularStemRegex.exec(stem);

  if (irregularStemFirstConst && !irregularStemVowelGroup) {
    return `${firstConst || ''}${vowelGroup || ''}${irregularStemFirstConst}`;
  }

  return `${irregularStemFirstConst || firstConst || ''}${irregularStemVowelGroup || vowelGroup || ''}${irregularStemSecondGroup || secondConst || ''}`;
}
