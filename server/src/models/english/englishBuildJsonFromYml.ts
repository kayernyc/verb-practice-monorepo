import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import * as dotenv from 'dotenv';

export type DataObj = {
  variations?: DataObj;
  definition?: string;
  translations?: { [languageAbbr: string]: string | string[] };
  tags?: string[];
  participle?: string;
  irregular?: { [key: string]: { [person: string]: string } | string };
};

export function readYamls(url: string | string[]) {
  const urlArray: string[] = typeof url === 'string' ? [url] : url;

  // urlArray.forEach((_url: string) => {
  //   try {
  //     const fileContents = fs.readFileSync(path.resolve(__dirname, '../../', _url), 'utf8');
  //     const data = yaml.load(fileContents) as { [x: string]: DataObj };
  //     const processedVerbs = processVerbs(data);
  //     writeJson(processedVerbs);
  //     return processedVerbs;
  //   } catch (err) {
  //     // eslint-disable-next-line no-console
  //     console.log(`Error in English verbs model: ${err as string} ${__dirname}`);
  //   }

  //   throw Error('Writing data failed.');
  // });
}
