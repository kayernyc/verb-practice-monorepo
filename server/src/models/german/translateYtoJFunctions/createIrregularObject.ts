import {
  GermanIrregularObject, GermanIrregularSet, GermanPronounKeys, GermanTenses,
} from '@german/germanTypes';
import { DataObj } from '../germanVerbs';

export default function createIrregularObject(dataObj: DataObj)
  : GermanIrregularObject {
  if (dataObj.irregular === undefined) {
    return {};
  }

  const objectKeys = Object.keys(dataObj.irregular);
  const irregularObj: GermanIrregularObject = {};

  objectKeys.forEach((key: string) => {
    const newKey: GermanTenses = GermanTenses[key] as GermanTenses;
    const newDataObj = dataObj.irregular[key];

    irregularObj[newKey] = <GermanIrregularSet>{};
    const irregularRule: GermanTenses = irregularObj[newKey] as GermanTenses;
    for (const pronounKey in newDataObj) {
      if (Object.prototype.hasOwnProperty.call(newDataObj, pronounKey)) {
        const pronoun: number = GermanPronounKeys[pronounKey];
        irregularRule[pronoun.toString()] = newDataObj[pronounKey];
      }
    }
  });

  return irregularObj;
}
