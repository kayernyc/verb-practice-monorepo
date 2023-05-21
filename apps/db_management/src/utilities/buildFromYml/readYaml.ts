import path from 'path';

export function findPathToData(dirPath: string): string {
  if (process.env.APP_ROOT && process.env.DATA_PATH) {
    const basePath = path.join(process.env.APP_ROOT, process.env.DATA_PATH);
    return path.relative(dirPath, basePath);
  }

  throw Error(
    `Required env path variable not found, data: ${process.env.DATA_PATH} and app root: ${process.env.APP_ROOT}`,
  );
}

export function findRelativePathToData(
  dirPath: string,
  dataPath?: string,
): string {
  const relativeDataPath = dataPath || findPathToData(dirPath);
  return path.join(dirPath, relativeDataPath);
}
