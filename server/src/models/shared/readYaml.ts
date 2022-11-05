import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

export function findPathToData(currentPath: string): string {
  const basePath = path.join(process.env.PWD, process.env.DATA_PATH);
  return path.relative(currentPath, basePath);
}
