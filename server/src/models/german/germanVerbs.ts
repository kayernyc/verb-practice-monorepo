import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

import {
  GermanStems, GermanTenses, GermanVerb, GermanPronounKeys, LanguageMap,
} from './germanTypes';

export type JSON_DATA = { [keyName: string]: GermanVerb | number | undefined };

const germanStemsDictionary = {
  'präsens du/es': 'duEs',
  präteritum: 'präteritum',
  partizip: 'partizip',
  'präsens singular': 'präsensSingular',
  k2präsens: 'k2präsens',
};

export type DataObj = {
  en: string;
  tags?: string[],
  hilfsverb?: string,
  partizip?: string,
  strong?: [string: boolean] | boolean,
  stems?: { [characterName: string]: string },
  irregular?: { [key: string]: { [person: string]: string } },
  'weak endings'?: boolean,
  'drop ich/es pr\u00e4sens endings'?: boolean
}

const createIrregular = (dataObj: DataObj) => {
  const objectKeys = Object.keys(dataObj.irregular);
  const irregularObj: { GermanTenses?: [GermanPronounKeys: string] } = {};

  objectKeys.forEach((key: string) => {
    const newKey: GermanTenses = GermanTenses[key] as GermanTenses;
    const newDataObj = dataObj.irregular[key];

    if (newDataObj) {
      irregularObj[newKey] = <{ GermanTenses?: [GermanPronounKeys: string] }>{};
      const irregularRule: GermanTenses = irregularObj[newKey] as GermanTenses;
      for (const pronounKey in newDataObj) {
        if (Object.prototype.hasOwnProperty.call(newDataObj, pronounKey)) {
          const pronoun: number = GermanPronounKeys[pronounKey];
          irregularRule[pronoun.toString()] = newDataObj[pronounKey];
        }
      }

      irregularObj[newKey] = irregularRule;
    }
  });

  return irregularObj;
};

const createStems = (dataObj: DataObj) => {
  const objectKeys = Object.keys(dataObj.stems);
  const stemsObj: { [key in GermanStems]?: string } = {};

  objectKeys.forEach((key: string) => {
    const enumKey: GermanStems = germanStemsDictionary[key] as GermanStems;
    stemsObj[enumKey] = dataObj.stems[key];
  });

  return stemsObj;
};

// let germanVerbsDictionary;
export const createVerb = (_infinitive: string, dataObj: DataObj): GermanVerb => {
  const languages: LanguageMap = {};
  languages.en = dataObj.en;

  const newVerb: GermanVerb = {
    drop: dataObj['drop ich/es pr\u00e4sens endings'] || false,
    hilfsverb: dataObj.hilfsverb || 'haben',
    infinitive: _infinitive,
    languages,
  };

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
};

const processVerbs = (data: { [x: string]: DataObj; }) => {
  const newJsonObj: JSON_DATA = {
    date: Date.now(),
  };

  for (const keyString in data) {
    if (Object.prototype.hasOwnProperty.call(data, keyString) && keyString !== 'date') {
      const newDataObj: DataObj = data[keyString];
      newJsonObj[keyString] = createVerb(keyString, newDataObj);
    }
  }

  newJsonObj.date = Date.now();

  return newJsonObj;
};

const writeJson = (newJsonObj: JSON_DATA) => {
  const data: string = JSON.stringify(newJsonObj);
  fs.writeFileSync(path.resolve(__dirname, '../../', 'data/germanVerbsUnhydrated.json'), data);
};

export function germanVerbData() {
  try {
    const fileContents = fs.readFileSync(path.resolve(__dirname, '../../', 'data/germanverbs.yaml'), 'utf8');
    const data = yaml.load(fileContents) as { [x: string]: DataObj; };
    const processedVerbs = processVerbs(data);
    writeJson(processedVerbs);
    return processedVerbs;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(`Error in germanverbs model: ${err as string} ${__dirname}`);
  }

  throw Error('Writing data failed.');
}
