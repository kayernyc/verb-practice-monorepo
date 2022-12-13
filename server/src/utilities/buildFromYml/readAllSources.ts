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

export function readYamls(
  url: string | string[],
  languageName: string,
  typeGuard: Guard<unknown>,
  _dataPath = dataPath,
): unknown[] | void {
  const urlArray: string[] = typeof url === 'string' ? [url] : url;

  return urlArray.map((_url: string) => {
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
    .filter((record: unknown) => {
      const keys = Object.keys(record);
      let returnValue = true;
      keys.forEach((key: string) => {
        if (key !== 'date' && !typeGuard(record[key])) {
          returnValue = false;
        }
      });

      return returnValue;
    });
}

export function buildAllSource(
  languageName: string,
  typeGuard: Guard<unknown>,
  _dataPath = dataPath,
): unknown[] | void {
  const allFileNames = fs.readdirSync(_dataPath)
    .filter((filename: string) => filename.slice(0, languageName.length) === languageName && filename.slice(-4) === 'yaml');

  return readYamls(allFileNames, languageName, typeGuard, _dataPath);
}
