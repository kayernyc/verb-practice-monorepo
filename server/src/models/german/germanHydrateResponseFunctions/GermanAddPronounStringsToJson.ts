import GermanPronounsCodeToString from '@german/germanHydrateResponseFunctions/GermanPronounsCodeToString';
import { GermanPronounKeys, GermanTenses, GermanVerb } from '@german/germanTypes';
import { JSON_DATA } from '../../jsonTypes';

const tenses: string[] = Object.keys(GermanTenses);

interface PronounHydration {
  subjectPronoun: string,
  verbConjugation: string,
}

interface ReturnJson {
  partizip: string,
  GermanTenses?: {
    [keyName: string]: PronounHydration;
  }
}

const GermanAddPronounStringsToJson = (sourceJson: any) => sourceJson;
// const sourceKeys = Object.keys(sourceJson).filter((key: string) => tenses.includes(key));
// if (sourceJson in JSON_DATA) {
//   const newJson: ReturnJson = {
//     partizip: sourceJson.partizip as unknown as string,
//   };

//   sourceKeys.forEach((key: string) => {
//     // type TenseType = { [keyName: string]: string | { subject: string, verb: string } };
//     console.log({ key });
//   });
// }

//   return sourceJson;
// }
export default GermanAddPronounStringsToJson;
