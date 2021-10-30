export default function verbIsInseparable(infinitve: string): boolean {
  const inseperableRegex = /^(be|emp|ent|er|ge|ver)(.*)/;
  return infinitve.match(inseperableRegex) !== undefined;
}
