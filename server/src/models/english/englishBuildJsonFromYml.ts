import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export type DataObj = {
  variations?: DataObj;
  definition?: string;
  translations?: { [languageAbbr: string]: string | string[] };
  tags?: string[];
  participle?: string;
  irregular?: { [key: string]: { [person: string]: string } | string };
};

export function weedOutDuplicates() {
  const seenVerbs = [];

  const filesToWeed = [
    'data/englishverbs.yaml',
    'data/englishRegulars.yaml',
    'data/englishRegulars2.yaml',
  ];

  filesToWeed.forEach((filePath: string) => {
    // eslint-disable-next-line no-console
    console.warn(filePath);
    try {
      const fileContents = fs.readFileSync(path.resolve(__dirname, '../../', filePath), 'utf8');
      const data = yaml.load(fileContents) as { [x: string]: DataObj };
      // eslint-disable-next-line no-console
      Object.keys(data).forEach((key: string) => {
        if (!seenVerbs.includes(key)) {
          seenVerbs.push(key);
        } else {
          // eslint-disable-next-line no-console
          console.warn(`${filePath} ${key} is a duplicate`);
        }
      })
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`Error in ${filePath}: ${err as string} ${__dirname}`);
    }
  });
}