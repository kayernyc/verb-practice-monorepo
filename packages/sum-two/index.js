import { sumOne } from 'sum-one';

export default function sumTwo(number) {
  return sumOne(sumOne(number));
}
