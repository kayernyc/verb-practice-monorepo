import { GermanStems } from '@german/germanTypes';
import { DataObj } from '../germanVerbs';

const germanStemsDictionary = {
  'präsens du/es': 'duEs',
  präteritum: 'präteritum',
  partizip: 'partizip',
  'präsens singular': 'präsensSingular',
  k2präsens: 'k2präsens',
};

export default function createStems(dataObj: DataObj) {
  const objectKeys = Object.keys(dataObj.stems);
  const stemsObj: { [key in GermanStems]?: string } = {};

  objectKeys.forEach((key: string) => {
    const enumKey: GermanStems = germanStemsDictionary[key] as GermanStems;
    stemsObj[enumKey] = dataObj.stems[key];
  });

  return stemsObj;
}
