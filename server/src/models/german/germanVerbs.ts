import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

import { GermanStems, GermanTenses, GermanVerb, GermanPronounKeys, LanguageMap } from './germanTypes';
// tslint:disable: no-console

const germanStemsDictionary = {
  'präsens du/es': 'duEs',
  'präteritum': 'präteritum',
  'partizip': 'partizip',
  'präsens singular': 'präsensSingular',
  'k2präsens': 'k2präsens'
}

export type DataObj = {
  en: string;
  tags?: string[],
  hilfsverb?: string,
  partizip?: string,
  strong?: [string: boolean] | boolean,
  stems?: { [characterName: string]: string },
  irregular?: { [key: string]: { [person: string]: string } },
  "weak endings"?: boolean,
  "drop ich/es pr\u00e4sens endings"?: boolean
}

const createIrregular = (dataObj) => {
  const objectKeys = Object.keys(dataObj.irregular);
  const irregularObj: { GermanTenses?: [GermanPronounKeys: string] } = {};

  objectKeys.forEach((key: string) => {
    const newKey: GermanTenses = GermanTenses[key];
    const newDataObj = dataObj.irregular[key];

    if (newDataObj) {
      const irregularRule = irregularObj[newKey] = {}
      for (const pronounKey in newDataObj) {
        if (newDataObj.hasOwnProperty(pronounKey)) {
          const pronoun = GermanPronounKeys[pronounKey]
          irregularRule[pronoun] = newDataObj[pronounKey]
        }
      }

      irregularObj[newKey] = irregularRule;
    }
  });

  return irregularObj;
}

const createStems = (dataObj) => {
  const objectKeys = Object.keys(dataObj.stems);
  const stemsObj: { [key in GermanStems]?: string } = {};

  objectKeys.forEach((key: string) => {
    const enumKey: GermanStems = germanStemsDictionary[key];
    stemsObj[enumKey] = dataObj.stems[key];
  })

  return stemsObj;
};

// let germanVerbsDictionary;
export const createVerb = (_infinitive: string, dataObj: DataObj) => {
  const languages: LanguageMap = {};
  languages.en = dataObj.en;

  const newVerb: GermanVerb = {
    drop: dataObj['drop ich/es pr\u00e4sens endings'] || false,
    hilfsverb: dataObj.hilfsverb || 'haben',
    infinitive: _infinitive,
    languages,
  }

  if (dataObj.strong || dataObj['weak endings'] || dataObj.irregular || dataObj.stems) {
    newVerb.strong = true;
  }

  if (dataObj['weak endings']) {
    newVerb.weakEndings = true;
  }

  if (dataObj.irregular) {
    newVerb.irregular = createIrregular(dataObj);
  }

  if (dataObj.stems) {
    newVerb.stems = createStems(dataObj);
    newVerb.strong = true;
  }

  return newVerb;
}

const processVerbs = (data) => {
  const newJsonObj: { [keyName: string]: GermanVerb | number | undefined } = {
    date: Date.now(),
  }

  for (const keyString in data) {
    if (data.hasOwnProperty(keyString) && keyString !== 'date') {
      newJsonObj[keyString] = createVerb(keyString, data[keyString]);
    }
  }

  // tslint:disable-next-line: no-string-literal
  newJsonObj['date'] = Date.now();

  return newJsonObj;
}

const writeJson = (newJsonObj: { [keyName: string]: GermanVerb | number | undefined }) => {
  const data: string = JSON.stringify(newJsonObj);
  fs.writeFileSync(path.resolve(__dirname, '../../', 'data/germanVerbsUnhydrated.json'), data);
}

export function germanVerbData() {

  try {
    const fileContents = fs.readFileSync(path.resolve(__dirname, '../../', 'data/germanverbs.yaml'), 'utf8');
    const data = yaml.load(fileContents);
    const processedVerbs = processVerbs(data)
    writeJson(processedVerbs);
    return processedVerbs;
  } catch (err) {
    console.log(`Error in germanverbs model: ${err} ${__dirname}`);
  }
}

