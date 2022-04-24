import { GermanStems } from '@german/germanTypes';
import { DataObj } from '../germanVerbs';

const germanStemsDictionary = {
  k2präsens: 'k2präsens',
  konjunktiv: 'konjunktiv',
  partizip: 'partizip',
  'präsens du/es': 'duEs',
  'präsens singular': 'präsensSingular',
  präteritum: 'präteritum',
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
