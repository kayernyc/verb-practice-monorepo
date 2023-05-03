import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { findRelativePathToData } from '@utilities/buildFromYml/readYaml';
import * as dotenv from 'dotenv';
// import { LanguageMap } from 'global-types';

dotenv.config();

type LanguageMap = 'en' | 'fr' | 'de';

interface LanguageVerbBase {
  language: LanguageMap;
  infinitive: string;
  translations: LanguageVerbBase;
}

type JsonRecord = {
  dateKey: number;
} | { [key: string] : LanguageVerbBase};

const readYamls = (url: string[], dataPath: string) => {
  const urlArray: string[] = typeof url === 'string' ? [url] : url;
  const allRecords: { [id: string]: number | LanguageVerbBase } = {};
  const keyDict: { [key: string]: number } = {};

  urlArray.map((_url: string) => {
    let processedData: unknown;

    try {
      const fileContents = fs.readFileSync(path.join(dataPath, _url), 'utf8');
      processedData = yaml.load(fileContents);
    } catch (err) {
      throw Error(`Error in ${url} verbs model: ${err as string} ${_url}`);
    }
    return processedData;
  })
  .forEach((record: unknown) => {
    if (record !== null && typeof record === 'object') {
      let currentDate = 0;
      const keys: string[] = Object.keys(record);
      const dataSource = record as JsonRecord;

      if (dataSource && typeof dataSource.dateKey === 'number') {
        currentDate = dataSource.dateKey || 0;
      }
      keys.forEach((key: string) => {
        if (key !== 'dateKey') {
          const verb = dataSource[key as keyof JsonRecord];
          if (keyDict[key] === undefined) {
            keyDict[key] = currentDate;
            allRecords[key] = verb;
          } else if (keyDict[key] < currentDate) {
            keyDict[key] = currentDate;
            allRecords[key] = verb;
          }
        }
      });
    }
  });

  return allRecords;
}

export function buildAllSource(
  dataPath?: string,
): unknown { // { [id: string]: T }
  const currentDataPath = dataPath || findRelativePathToData(__dirname);

  const allFileNames = fs
    .readdirSync(currentDataPath)
    .filter(
      (filename: string) =>
        filename.charAt(0) !== '_' && filename.slice(-4) === 'yaml',
    );

    return readYamls(allFileNames, currentDataPath);
}