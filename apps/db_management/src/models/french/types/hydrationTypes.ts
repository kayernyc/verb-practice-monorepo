import { FrenchPronounCode, FrenchTenses } from "french-types";

export type PronounType = '1033' | '1041' | '1074' | '1098' | '1292' | '1300';
export type TenseType = Record<PronounType, string>

export type IrregularFields = {
  FrenchTenses?: {
    [key in FrenchPronounCode]: string;
  }
}

export type IrregularStems = {
  pluralStem?: {
    [key in FrenchTenses]?: string;
  } | string
}