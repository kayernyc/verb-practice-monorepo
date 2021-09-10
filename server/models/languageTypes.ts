export enum GrammaticalPerson {
  None = 0 << 0,  // 0
  First = 1 << 0, // 1
  Second = 1 << 1, // 2
  Third = 1 << 2, // 4
};

export enum GrammaticalNumber {
  None = 1 << 3,  // 8
  Singular = 1 << 4, // 16
  Plural = 1 << 5, // 32
};

export enum GrammaticalFormal {
  None = 0 << 6,  // 64
  Formal = 1 << 7, // 128
  Informal = 1 << 8, // 256
};

export enum GrammaticalGender {
  None = 0 << 9,  // 516
  Feminine = 1 << 10, // 1032
  Masculine = 1 << 11, // 2064
  Neuter = 1 << 12, // 4128
};

