import { GermanVerb } from '@german/germanTypes';
import { DataObj } from '../germanBuildJsonFromYml';
import createIrregularObject from './createIrregularObject';
import createStems from './createStems';

export default function createIrregularVerbFeatures({
  newVerb,
  dataObj,
}: {
  newVerb: GermanVerb;
  dataObj: DataObj;
}): GermanVerb {
  const { partizip, irregular, stems } = dataObj;
  newVerb.strong = true;

  if (dataObj['weak endings']) {
    newVerb.weakEndings = true;
  }

  if (partizip) {
    newVerb.partizip = partizip;
  }

  if (irregular) {
    newVerb.irregular = createIrregularObject(dataObj);
  }

  if (stems) {
    newVerb.stems = createStems(dataObj);
  }

  return newVerb;
}
