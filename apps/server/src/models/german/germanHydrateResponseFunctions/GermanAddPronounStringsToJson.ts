import GermanPronounsCodeToString from '@german/germanHydrateResponseFunctions/GermanPronounsCodeToString';
import { GermanTenses, GermanVerbHydrated } from '@german/germanTypes';

const tenses: string[] = Object.keys(GermanTenses);

interface PronounHydration {
  subjectPronoun: string;
  verbConjugation: string;
}

interface ReturnJson {
  language: string;
  hilfsverb: string;
  infinitive: string;
  partizip: string;
  GermanTenses?: {
    [keyName: number]: PronounHydration;
  };
}

const germanAddPronounStringsToJson = (sourceJson: GermanVerbHydrated): ReturnJson => {
  const returnJson = { ...sourceJson };
  const sourceKeys = Object.keys(sourceJson).filter((key: string) => tenses.includes(key));

  sourceKeys.forEach((key: string) => {
    const sourceTense = sourceJson[key] as { [person: number]: string };
    const returnTense = Object.keys(sourceTense).reduce((acc, curr) => {
      const verbConjugation: string = sourceTense[curr] as string;
      const subjectPronoun = GermanPronounsCodeToString(parseInt(curr, 10));

      acc[curr] = {
        subjectPronoun,
        verbConjugation,
      };

      return acc;
    }, {});

    returnJson[key] = returnTense;
  });

  return returnJson;
};

export default germanAddPronounStringsToJson;
