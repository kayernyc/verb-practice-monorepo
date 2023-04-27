import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import * as dotenv from 'dotenv';

import { findRelativePathToData } from '@models/shared/readYaml';

type Guard<T> = (x: unknown) => x is T;

const passingType = <T, U>(t: Guard<T>, p: U): boolean => t(p);

dotenv.config();

type JsonRecord = {
  date: number;
};

export function readYamls<T>(
  url: string | string[],
  languageName: string,
  typeGuard: Guard<T>,
  dataPath: string,
): { [id: string]: T } {
  const urlArray: string[] = typeof url === 'string' ? [url] : url;
  const allRecords: { [id: string]: T } = {};
  const keyDict: { [key: string]: number } = {};

  urlArray
    .map((_url: string) => {
      let processedData: unknown;

      try {
        const fileContents = fs.readFileSync(path.join(dataPath, _url), 'utf8');
        processedData = yaml.load(fileContents);
      } catch (err) {
        throw Error(`Error in ${languageName} verbs model: ${err as string} ${_url}`);
      }
      return processedData;
    })
    .forEach((record: unknown) => {
      let currentDate = 0;
      const keys = Object.keys(record);
      const dateSource = record as JsonRecord;
      if (dateSource) {
        currentDate = dateSource.date || 0;
      }
      keys.forEach((key: string) => {
        if (key !== 'date' && typeGuard(record[key])) {
          const verb = record[key] as T;
          if (keyDict[key] === undefined) {
            keyDict[key] = currentDate;
            allRecords[key] = verb;
          } else if (keyDict[key] < currentDate) {
            keyDict[key] = currentDate;
            allRecords[key] = verb;
          }
        }
      });
    });

  return allRecords;
}

export function buildAllSource<T>(
  languageName: string,
  typeGuard: Guard<T>,
  dataPath?: string,
): { [id: string]: T } {
  const currentDataPath = dataPath || findRelativePathToData(__dirname);

  const allFileNames = fs
    .readdirSync(currentDataPath)
    .filter(
      (filename: string) =>
        filename.slice(0, languageName.length) === languageName && filename.slice(-4) === 'yaml',
    );
  return readYamls(allFileNames, languageName, typeGuard, currentDataPath);
}
