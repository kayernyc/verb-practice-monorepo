// thank you https://github.com/acnebs
export type RegExpGroups<T extends string> =
  | (RegExpMatchArray & {
      groups?: { [name in T]: string } | { [key: string]: string };
    })
  | null;
