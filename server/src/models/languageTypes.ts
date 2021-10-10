// tslint:disable: no-bitwise
export enum GrammaticalPerson {
  None = 0 << 0,  // 0
  First = 1 << 0, // 1
  Second = 1 << 1, // 2
  Third = 1 << 2, // 4
};

export enum GrammaticalNumber {
  None = 0 << 0,  // 0
  Singular = 1 << 3, // 8
  Plural = 1 << 4, // 16
};

export enum GrammaticalFormal {
  None = 0 << 0,  // 0
  Formal = 1 << 5, // 32
  Informal = 1 << 6, // 64
};

export enum GrammaticalGender {
  None = 0 << 0,  // 0
  Feminine = 1 << 7, // 128
  Masculine = 1 << 8, // 256
  Neuter = 1 << 9, // 512
};
// tslint:enable: no-bitwise
