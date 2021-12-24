const germanConsonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'ß'];

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

  return `${irregularStemFirstConst || firstConst || ''}${irregularStemVowelGroup || vowelGroup || ''}${irregularStemSecondGroup || secondConst || ''}`;
}

/*
  return germanConsonants.includes(irregularStem.charAt(0))
    ? irregularStem
    : stem.replace(regex, `$1${irregularStem}`);
*/
