import path from 'path';
import { findRelativePathToData } from './readYaml';

describe('findRelativePathToData', () => {
  it('finds the relative path', () => {
    const testPath = path.join('src', 'bob');
    const result: string = findRelativePathToData(testPath);
    expect(result).toEqual('dist/data');
  });
});
