import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import * as dotenv from 'dotenv';

import { findPathToData } from '@models/shared/readYaml';

type Guard<T> = (x: unknown) => x is T;

const passingType = <T, U>(t: Guard<T>, p: U): boolean => t(p);

dotenv.config();

const relativeDataPath = findPathToData(__dirname);
const dataPath = path.join(__dirname, relativeDataPath);

export function readYamls<T>(
  url: string | string[],
  languageName: string,
  typeGuard: Guard<T>,
  _dataPath = dataPath,
): { [id: string]: T; } {
  const urlArray: string[] = typeof url === 'string' ? [url] : url;
  const allRecords: { [id: string]: T; } = {};
  const keyDict: { [key: string]: number } = {};

  urlArray.map((_url: string) => {
    let processedData: unknown;

    try {
      const fileContents = fs.readFileSync(path.join(_dataPath, _url), 'utf8');
      processedData = yaml.load(fileContents);
    } catch (err) {
      // eslint-disable-next-line no-console
      throw Error(`Error in ${languageName} verbs model: ${err as string} ${_url}`);
    }
    return processedData;
  })
    .forEach((record: unknown) => {
      let currentDate = 0;
      const keys = Object.keys(record);
      keys.forEach((key: string) => {
        // eslint-disable-next-line dot-notation
        if (record['date'] !== undefined) {
          // eslint-disable-next-line dot-notation
          currentDate = record['date'] as number || 0;
        }
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
  _dataPath = dataPath,
): { [id: string]: T; } {
  const allFileNames = fs.readdirSync(_dataPath)
    .filter((filename: string) => filename.slice(0, languageName.length) === languageName && filename.slice(-4) === 'yaml');

  return readYamls(allFileNames, languageName, typeGuard, _dataPath);
}
