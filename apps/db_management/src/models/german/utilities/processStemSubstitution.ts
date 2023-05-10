import { RegExpGroups } from 'global-types';

const irregularStemRegex =
  /(?<firstConst>[bcdfghjklmnpqrstvwxyzß]*)(?<vowelGroup>[aeiouäöü]*)(?<secondConst>[bcdfghjklmnpqrstvwxyzß]*)/;

const regularStemRegex =
  /(?<firstConst>[bcdfghjklmnpqrstvwxyzß]*)(?<vowelGroup>[aeiouäöü]*)(?<secondConst>[a-zß]*)/;

const matchSet = (testString: string, regex: RegExp) => {
  let firstConst: string;
  let vowelGroup: string;
  let secondConst: string;

  const regularResult: RegExpGroups<
    'firstConst' | 'vowelGroup' | 'secondConst'
  > = regex.exec(testString);
  if (regularResult) {
    firstConst = regularResult.groups!.firstConst;
    vowelGroup = regularResult.groups!.vowelGroup;
    if (!vowelGroup && firstConst) {
      secondConst = firstConst;
      firstConst = '';
    } else {
      secondConst = regularResult.groups!.secondConst;
    }
    return [firstConst, vowelGroup, secondConst];
  }
  return ['', '', ''];
};

export const processStemSubstitution = ({
  regularStem,
  irregularStem,
}: {
  regularStem: string;
  irregularStem: string;
}) => {
  const [firstConst, vowelGroup, secondConst] = matchSet(
    regularStem,
    regularStemRegex,
  );
  const [irrfirstConst, irrvowelGroup, irrsecondConst] = matchSet(
    irregularStem,
    irregularStemRegex,
  );

  return `${irrfirstConst || firstConst}${irrvowelGroup || vowelGroup}${
    irrsecondConst || secondConst
  }`;
};
