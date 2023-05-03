import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { LanguageVerbBase, LanguageMap } from 'global-types'

type JsonRecord = {
  dateKey: number;
} | { [key: string] : LanguageVerbBase};

export const readYamls = (url: string[], dataPath: string) => {
  const urlArray: string[] = typeof url === 'string' ? [url] : url;
  const allRecords = {
    currentDate: 0,
    [LanguageMap.de]: new Array<LanguageVerbBase>,
    [LanguageMap.en]: new Array<LanguageVerbBase>,
    [LanguageMap.fr]: new Array<LanguageVerbBase>,
  }

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
      const keys = Object.keys(record);
      const dataSource = record as JsonRecord;

      if (dataSource && typeof dataSource.dateKey === 'number') {
        currentDate = dataSource.dateKey || 0;
        allRecords.currentDate = currentDate;
      }
      keys.forEach((key: string) => {
        if (key !== 'dateKey') {
          try {
            const verb: LanguageVerbBase = dataSource[key as keyof JsonRecord] as LanguageVerbBase;
            const langKey = verb.language;
            if (verb.infinitive === undefined) {
              verb.infinitive = key;
            }
  
            allRecords[langKey].push(verb);
          } catch (err) {
            const errorMessage = err instanceof Error ? err.message : `${err}`;
            console.log(`Error with ${key}: ${errorMessage}`);
          } 
        }
      });
    }
  });

  return allRecords;
}
