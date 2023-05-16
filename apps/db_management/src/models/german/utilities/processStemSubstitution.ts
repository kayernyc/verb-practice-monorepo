import { RegExpGroups } from 'global-types';
import { regularStemRegex, syllableRegex } from 'german-types';

const matchSet = (testString: string, regex: RegExp) => {
  let prepend = '';
  let firstConst: string;
  let vowelGroup: string;
  let secondConst: string;

  const regularResult: RegExpGroups<
    'prepend' | 'firstConst' | 'vowelGroup' | 'secondConst'
  > = regex.exec(testString);
  if (regularResult) {
    prepend = regularResult.groups!.prepend || '';
    firstConst = regularResult.groups!.firstConst;
    vowelGroup = regularResult.groups!.vowelGroup;

    if (!vowelGroup && firstConst) {
      secondConst = firstConst;
      firstConst = '';
    } else {
      secondConst = regularResult.groups!.secondConst;
    }

    return [prepend, firstConst, vowelGroup, secondConst];
  }
  return ['', '', '', ''];
};

export const processStemSubstitution = ({
  regularStem,
  irregularStem,
}: {
  regularStem: string;
  irregularStem: string;
}) => {
  const [prepend, firstConst, vowelGroup, secondConst] = matchSet(
    regularStem,
    regularStemRegex,
  );
  const [_, irrfirstConst, irrvowelGroup, irrsecondConst] = matchSet(
    irregularStem,
    syllableRegex,
  );

  return `${prepend}${irrfirstConst || firstConst}${
    irrvowelGroup || vowelGroup
  }${irrsecondConst || secondConst}`;
};
