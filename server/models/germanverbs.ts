import fs from 'fs';
import yaml from 'js-yaml';

import { GermanTenses, GermanVerb, GermanPronounKeys, LanguageMap } from './germanTypes';
// tslint:disable: no-console

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

// let germanVerbsDictionary;
const createVerb = (_infinitive: string, dataObj: DataObj) => {
  const languages: LanguageMap = {};
  languages.en = dataObj.en;

  const newVerb: GermanVerb = {
    drop: dataObj["drop ich/es pr\u00e4sens endings"] || false,
    hilfsverb: dataObj.hilfsverb || 'haben',
    infinitive: _infinitive,
    languages,
    strong: dataObj.strong || false
  }

  if (dataObj.irregular) {
    newVerb.irregular = createIrregular(dataObj);
  }

  return newVerb;
}

const pollSeperableParticles = (pipes: string[]) => {
  const dictionary: { string?: number } = {}

  for (const pipeword of pipes) {
    const particle = pipeword.slice(0, pipeword.indexOf('|'));
    let record = dictionary[particle];
    if (record) {
      record++
    } else {
      record = 1
    }
    dictionary[particle] = record
  }

  console.log(Object.keys(dictionary))
}

const processVerbs = (data) => {
  const newJsonObj: { [keyName: string]: GermanVerb | number | undefined } = {
    date: Date.now(),
  }
  const hilfsverb = [];
  const modal = [];
  const pipes = []

  for (const keyString in data) {
    if (data.hasOwnProperty(keyString) && keyString !== 'date') {
      const hydratedVerb = createVerb(keyString, data[keyString]);
      if (keyString.includes('|')) {
        pipes.push(keyString)
      }
      newJsonObj[keyString] = hydratedVerb;
    }
  }

  // tslint:disable-next-line: no-string-literal
  newJsonObj['date'] = Date.now();

  return newJsonObj;
}

const writeJson = (newJsonObj: { [keyName: string]: GermanVerb | number | undefined }) => {
  const data: string = JSON.stringify(newJsonObj);
  fs.writeFileSync('./data/germanVerbsUnhydrated.json', data);
}

export function germanVerbData() {
  try {
    const fileContents = fs.readFileSync('./data/germanverbs.yaml', 'utf8');
    const data = yaml.load(fileContents);
    writeJson(processVerbs(data))
  } catch (err) {
    console.log(`Error in germanverbs model: ${err}`);
  }
}

