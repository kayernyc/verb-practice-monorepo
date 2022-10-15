import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const args = process.argv;
// eslint-disable-next-line no-console
console.log(args);
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

export function weedOutDuplicates() {
  const seenVerbs = {
    de: [],
    en: [],
  };
  // eslint-disable-next-line no-console
  console.log({ filesArray });

  filesArray.forEach((filePath: string) => {
    // eslint-disable-next-line no-console
    try {
      const fileContents = fs.readFileSync(path.resolve(__dirname, '../../', filePath), 'utf8');
      const data = yaml.load(fileContents) as { [x: string]: DataObj };

      Object.keys(data).forEach((key: string) => {
        const langKey = data[key].language;

        const wordArray = seenVerbs[langKey] as string[];

        if (!wordArray.includes(key)) {
          wordArray.push(key);
        } else {
          // eslint-disable-next-line no-console
          console.warn(`${filePath} ${key} is a duplicate`);
        }
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`Error in ${filePath}: ${err as string} ${__dirname}`);
    }
  });
}

weedOutDuplicates();
