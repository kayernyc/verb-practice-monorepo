import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

import { GermanJsonData, LanguageMap } from '@models/jsonTypes';
import { GermanVerb } from './germanTypes';

import verbIsIrregular from './propertyTestFunctions/verbIsIrregular';
import createIrregularVerbFeatures from './translateYtoJFunctions/createIrregularVerbFeatures';

export type DataObj = {
  translations?: { [languageAbbr: string]: string | string[] };
  tags?: string[];
  hilfsverb?: string;
  partizip?: string;
  strong?: [string: boolean] | boolean;
  stems?: { [characterName: string]: string };
  irregular?: { [key: string]: { [person: string]: string } };
  'weak endings'?: boolean;
  'drop ich/es pr\u00e4sens endings'?: boolean;
};

// let germanVerbsDictionary;
export const createVerb = (_infinitive: string, dataObj: DataObj): GermanVerb => {
  const languages: LanguageMap = {};
  languages.en = dataObj.translations.en;

  let newVerb: GermanVerb = {
    drop: dataObj['drop ich/es pr\u00e4sens endings'] || false,
    hilfsverb: dataObj.hilfsverb || 'haben',
    infinitive: _infinitive,
    languages,
  };

  if (verbIsIrregular(dataObj)) {
    newVerb = createIrregularVerbFeatures({ newVerb, dataObj });
  }

  return newVerb;
};

const processVerbs = (data: { [x: string]: DataObj }): GermanJsonData => {
  const newJsonObj: GermanJsonData = {
    date: Date.now(),
    verbs: {},
  };

  for (const keyString in data) {
    if (Object.prototype.hasOwnProperty.call(data, keyString) && keyString !== 'date') {
      const newDataObj: DataObj = data[keyString];
      newJsonObj.verbs[keyString] = createVerb(keyString, newDataObj);
    }
  }

  newJsonObj.date = Date.now();

  return newJsonObj;
};

const writeJson = (newJsonObj: GermanJsonData) => {
  const data: string = JSON.stringify(newJsonObj);
  fs.writeFileSync(path.resolve(__dirname, '../../', 'data/germanVerbsUnhydrated.json'), data);
};

export function germanVerbData() {
  try {
    const fileContents = fs.readFileSync(path.resolve(__dirname, '../../', 'data/germanverbs.yaml'), 'utf8');
    const data = yaml.load(fileContents) as { [x: string]: DataObj };
    const processedVerbs = processVerbs(data);
    writeJson(processedVerbs);
    return processedVerbs;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(`Error in germanverbs model: ${err as string} ${__dirname}`);
  }

  throw Error('Writing data failed.');
}
