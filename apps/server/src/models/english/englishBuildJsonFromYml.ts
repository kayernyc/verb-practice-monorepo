import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import * as dotenv from 'dotenv';

import { findRelativePathToData } from '@models/shared/readYaml';
import { EnglishJsonData, EnglishVerb } from '@english/englishTypes';

dotenv.config();

const dataPath = findRelativePathToData(__dirname);

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

export function writeProcessedVerbsToFile(
  url: string,
  processedVerbs: EnglishJsonData,
  _dataPath = dataPath,
) {
  const data: string = JSON.stringify(processedVerbs);
  fs.writeFileSync(path.join(_dataPath, url), data);
}

export function processVerbs(verbs: DataObjEntry[]) {
  const newJsonObj: EnglishJsonData = {
    date: Date.now(),
    verbs: {},
  };

  verbs.forEach((yamlObject: DataObjEntry) => {
    Object.keys(yamlObject).forEach((key: string) => {
      const dict = yamlObject[key] as unknown as EnglishVerb;
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
      throw Error(`Error in English verbs model: ${err as string} ${_url}`);
    }
    return processedData;
  })
    .filter((record: DataObjEntry | undefined) => record !== undefined);
}

export function buildAllSourceEnglish() {
  const allFileNames = fs.readdirSync(dataPath)
    .filter((filename: string) => filename.slice(0, 7) === 'english' && filename.slice(-4) === 'yaml');

  const allFiles = readYamls(allFileNames);
  if (allFiles) {
    const allverbs = processVerbs(allFiles);
    writeProcessedVerbsToFile('englishVerbsUnhydrated.json', allverbs);
  }
}
