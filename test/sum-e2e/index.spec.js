import sumTwo from 'sum-two';
import { sumOne } from 'sum-one';

describe('When using sumOne and sumTwo', () => {
  it('should sum 3 to 7', () => {
    expect(sumOne(sumTwo(4))).toEqual(7);
  });
});
