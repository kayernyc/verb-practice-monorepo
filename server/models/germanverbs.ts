import fs from 'fs';
import yaml from 'js-yaml';

import { GermanTenses } from './germanEnums';
// tslint:disable: no-console

const newJsonObj = {
  date: Date.now(),
}

const germanStemsDictionary = {
  'präsens du/es': 'duEs',
  'präteritum': 'präteritum',
  'partizip': 'partizip',
  'präsens singular': 'präsensSingular',
  'k2präsens': 'k2präsens'
}

type DataObj = {
  en: string;
  tags?: string[],
  hilfsverb?: string,
  strong?: [string: boolean] | boolean,
  stems?: [string: string],
  irregular?: [string: [string: string]]
  "drop ich/es pr\u00e4sens endings"?: boolean
}

// let germanVerbsDictionary;
const createVerb = (_infinitive: string, dataObj: DataObj) => {
  const languages = [dataObj.en];

  const newVerb: GermanVerb = {
    drop: dataObj["drop ich/es pr\u00e4sens endings"] || false,
    hilfsverb: dataObj.hilfsverb || 'haben',
    infinitive: _infinitive,
    languages,
    strong: dataObj.strong || false
  }

  if (dataObj.irregular) {
    const objectKeys = Object.keys(dataObj.irregular)
    const irregularObj = {}

    objectKeys.forEach((key: string) => {
      const newKey: GermanTenses = GermanTenses[key];
      console.log(dataObj.irregular[key]);
    })

    // newVerb.irregular = irregularObj;
  }

  return newVerb;
}

const processVerbs = (data) => {
  const hilfsverb = [];
  const modal = [];
  const irregular = [];

  for (const infiinitve in data) {
    if (data.hasOwnProperty(infiinitve) && infiinitve !== 'date') {

      const obj: DataObj = data[infiinitve];


      if (obj.tags?.includes('hilfsverb')) {
        hilfsverb.push(infiinitve);
      }

      if (obj.tags?.includes('modal')) {
        modal.push(infiinitve);
      }

      const hydratedVerb = createVerb(infiinitve, obj);
      newJsonObj[infiinitve] = hydratedVerb;
    }
  }

  // hydrate all hilfsverbs and modals
  // console.log(hilfsverb);
  // console.log(modal);
  // console.log(irregular);
  // console.log({ newJsonObj })
}

export function germanVerbData() {
  try {
    const fileContents = fs.readFileSync('./data/germanverbs.yaml', 'utf8');
    const data = yaml.load(fileContents);
    processVerbs(data);
  } catch (err) {
    console.log(`Error in germanverbs model: ${err}`);
  }
}

