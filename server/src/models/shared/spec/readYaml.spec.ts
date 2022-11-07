import path from 'path';
import { findPathToData } from '../readYaml';

describe('findPathToData', () => {
  it('finds the relative path', () => {
    const testPath = path.join(process.env.PWD, 'src', 'bob');
    const result: string = findPathToData(testPath);
    expect(result).toEqual('../../dist/data');
  });
});
