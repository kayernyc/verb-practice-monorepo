import { GermanPronounKeys } from 'german-types';
import { modifiedStem } from '../utilities/modifiedStem';
import { RegExpGroups } from 'global-types';

const singleVowelNoUmlaut =
  /(?<firstConst>[bcdfghjklmnpqrstvwxyzß]*)(?<vowel>(?<![aou])[aou](?![aou]))(?<rest>[bcdfghjklmnpqrstvwxyzß]+[a-zß]*)/;
const umlautVersions: { [key: string]: string } = {
  a: 'ä',
  o: 'ö',
  u: 'ü',
};

export const hydrateKonjunktiv2Conjugation = (
  stem: string,
  irregularStem: string,
  weakEndings: boolean,
  particle = '',
): { [key: string]: string } => {
  let newStem = modifiedStem(stem, irregularStem);
  let defaultEnding = 'e';
  /*
  A completely regular strong verb will form
  its K2 stem by applying an umlaut to the vowels
  in past stem if the vowels are capable of
  taking an umlaut, or using the past stem
  unchanged otherwise (RULE2).
  */
  const match: RegExpGroups<'firstConst' | 'vowelGroup' | 'rest'> =
    singleVowelNoUmlaut.exec(newStem);

  if (match?.groups) {
    const {
      groups: { firstConst, vowel, rest },
    } = match;

    if (vowel && umlautVersions[vowel]) {
      newStem = `${firstConst}${umlautVersions[vowel]}${rest || ''}`;
    }
  }

  if (weakEndings) {
    defaultEnding = 'te';
  }

  return {
    [GermanPronounKeys.ich]: `${particle}${newStem}${defaultEnding}`,
    [GermanPronounKeys.du]: `${particle}${newStem}${defaultEnding}st`,
    [GermanPronounKeys.es]: `${particle}${newStem}${defaultEnding}`,
    [GermanPronounKeys.wir]: `${particle}${newStem}${defaultEnding}n`,
    [GermanPronounKeys.ihr]: `${particle}${newStem}${defaultEnding}t`,
  };
};
