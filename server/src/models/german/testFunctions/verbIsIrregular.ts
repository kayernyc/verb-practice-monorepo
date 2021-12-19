import { DataObj } from '../germanVerbs';

export default function verbIsIrregular(dataObj: DataObj): boolean {
  // no empty function
  if (dataObj.strong
    || dataObj['weak endings']
    || dataObj.irregular
    || dataObj.stems
    || dataObj.partizip) {
    return true;
  }

  return false;
}
