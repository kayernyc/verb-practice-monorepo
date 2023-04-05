import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

export function findPathToData(dirPath: string): string {
  const basePath = path.join(process.env.PWD, process.env.DATA_PATH);
  return path.relative(dirPath, basePath);
}

export function findRelativePathToData(dirPath: string, dataPath?: string): string {
  const relativeDataPath = dataPath || findPathToData(dirPath);

  return path.join(dirPath, relativeDataPath);
}
