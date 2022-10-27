import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import * as dotenv from 'dotenv';

import { findPathToData } from '@models/shared/readYaml';
import { EnglishVerb } from '@english/englishTypes';

dotenv.config();

const dataPath = findPathToData(__dirname);

export type DataObj = {
  variations?: DataObj;
  definition?: string;
  translations?: { [languageAbbr: string]: string | string[] };
  tags?: string[];
  participle?: string;
  irregular?: { [key: string]: { [person: string]: string } | string };
};

export type DataObjEntry = {
  [x: string]: DataObj | number;
};

export interface EnglishVerbDictionary {
  [key: string]: EnglishVerb;
}

export interface EnglishJsonData {
  date: number;
  verbs: EnglishVerbDictionary;
}

export function processVerbs(verbs: (DataObjEntry)[]) {
  const newJsonObj: EnglishJsonData = {
    date: Date.now(),
    verbs: {},
  };

  verbs.forEach((yamlObject: DataObjEntry) => {
    Object.keys(yamlObject).forEach((key: string) => {
      const dict = yamlObject[key] as EnglishVerb;
      if (key !== 'date') {
        newJsonObj.verbs[key] = dict;
      }
    });
  });

  newJsonObj.date = Date.now();

  return newJsonObj;
}

export function readYamls(
  url: string | string[],
  _dataPath = dataPath,
): DataObjEntry[] | void {
  const urlArray: string[] = typeof url === 'string' ? [url] : url;

  return urlArray.map((_url: string) => {
    let processedData: DataObjEntry;
    try {
      const fileContents = fs.readFileSync(path.join(_dataPath, _url), 'utf8');
      processedData = yaml.load(fileContents) as DataObjEntry;
    } catch (err) {
      // eslint-disable-next-line no-console
      throw Error(`Error in English verbs model: ${err as string} ${__dirname}`);
    }
    return processedData;
  })
    .filter((record: DataObjEntry | undefined) => record !== undefined);
}
