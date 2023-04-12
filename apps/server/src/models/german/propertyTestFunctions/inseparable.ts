import { inseperableRegex } from '../germanConstants';

export default function verbIsInseparable(infinitve: string): boolean {
  if (infinitve.includes('|')) return false;
  return infinitve.match(inseperableRegex) !== null;
}
