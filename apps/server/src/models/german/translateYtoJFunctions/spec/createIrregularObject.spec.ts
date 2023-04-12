import { seinDataObject } from '@german/spec/specConstants';
import createIrregularObject from '../createIrregularObject';
import { DataObj } from '../../germanBuildJsonFromYml';

describe('createIrregularObject correctly modifies the object', () => {
  it('does not modify sollen because it does not have irregular', () => {
    const sollen: DataObj = {
      translations:
        { en: 'to be expected to' },
      tags: ['modal'],
      'drop ich/es präsens endings': true,
    };
    const result = createIrregularObject({ ...sollen });
    expect(result).toEqual({});
  });

  it('does modify sein because it does have irregular', () => {
    const expected = {
      präsens: {
        1033: 'bin',
        1041: 'sind',
        1098: 'bist',
        1106: 'seid',
        1548: 'ist',
      },
    };

    const result = createIrregularObject({ ...seinDataObject });
    expect(result).toEqual(expected);
  });
});
