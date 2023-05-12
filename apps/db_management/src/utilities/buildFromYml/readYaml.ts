import path from 'path';

import * as dotenv from 'dotenv';
console.log(process.env);

export function findPathToData(dirPath: string): string {
  if (process.env.APP_ROOT && process.env.DATA_PATH) {
    const basePath = path.join(process.env.APP_ROOT, process.env.DATA_PATH);
    return path.relative(dirPath, basePath);
  }

  throw Error('Required env path variable not found');
}

export function findRelativePathToData(
  dirPath: string,
  dataPath?: string,
): string {
  const relativeDataPath = dataPath || findPathToData(dirPath);
  return path.join(dirPath, relativeDataPath);
}
