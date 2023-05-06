import fs from 'fs';
import { findRelativePathToData } from '@utilities/buildFromYml/readYaml';
import { readYamls } from 'models/readSourceYamls';


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

    const allSource =  readYamls(allFileNames, currentDataPath);
    return allSource;
}
