import fs from 'fs';
import { findRelativePathToData } from '@utilities/buildFromYml/readYaml';
import { readYamls } from 'models/readSourceYamls';
import { LanguageVerbBase } from 'global-types';

type VerbDictionary = {
  de: LanguageVerbBase[];
  en: LanguageVerbBase[];
  fr: LanguageVerbBase[];
  currentDate: number;
};

export function buildAllSource(dataPath?: string): VerbDictionary {
  // TODO: add error handling
  const currentDataPath = dataPath || findRelativePathToData(__dirname);

  const allFileNames = fs
    .readdirSync(currentDataPath)
    .filter(
      (filename: string) =>
        filename.charAt(0) !== '_' && filename.slice(-4) === 'yaml',
    );

  const allSource = readYamls(allFileNames, currentDataPath);

  return allSource;
}
