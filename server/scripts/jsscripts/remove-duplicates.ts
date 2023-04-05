import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const args = process.argv;
const filesArray: string[] = args.slice(2);

type DataObj = {
  language: string;
  variations?: DataObj;
  definition?: string;
  translations?: { [languageAbbr: string]: string | string[] };
  tags?: string[];
  hilfsverb?: string;
  participle?: string;
  partizip?: string;
  strong?: [string: boolean] | boolean;
  stems?: { [characterName: string]: string };
  irregular?: { [key: string]: { [person: string]: string } | string };
  'weak endings'?: boolean;
  'drop ich/es pr\u00e4sens endings'?: boolean;
};

export function weedOutDuplicates(_filesArray = filesArray) {
  const seenVerbs = {
    de: [],
    en: [],
  };
  // eslint-disable-next-line no-console
  console.log({ _filesArray });

  _filesArray.forEach((filePath: string) => {
    try {
      // eslint-disable-next-line no-console
      console.log(filePath);
      const fileContents = fs.readFileSync(path.resolve(__dirname, '../../', filePath), 'utf8');
      const data = yaml.load(fileContents) as { [x: string]: DataObj };

      Object.keys(data).forEach((key: string) => {
        if (key !== 'date') {
          const langKey = data[key].language;

          const wordArray = seenVerbs[langKey] as string[];

          if (!wordArray.includes(key)) {
            wordArray.push(key);
          } else {
            // eslint-disable-next-line no-console
            console.warn(`${filePath} ${key} is a duplicate`);
          }
        }
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`Error in ${filePath}: ${err as string} ${__dirname}`);
    }
  });
}

weedOutDuplicates();
