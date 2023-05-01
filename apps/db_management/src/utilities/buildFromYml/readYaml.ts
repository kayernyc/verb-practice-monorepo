import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

export function findPathToData(dirPath: string): string {
  if (process.env.PWD && process.env.DATA_PATH) {
    const basePath = path.join(process.env.PWD, process.env.DATA_PATH);
    return path.relative(dirPath, basePath);
  }

  throw Error('Required env path variable not found');
}

export function findRelativePathToData(dirPath: string, dataPath?: string): string {
  const relativeDataPath = dataPath || findPathToData(dirPath);

  return path.join(dirPath, relativeDataPath);
}
