import { Schema } from 'mongoose';

import { GermanTenses } from '@german/germanTypes';

export interface GermanConjugationModel {
  person: string;
  conjugation: string;
}

export const GermanConjugationSchema = new Schema<GermanConjugationModel>({
  person: Number,
  conjugation: String,
});

export interface GermanVerbTenseModel {
  tenseName: GermanTenses;
  conjugations: GermanConjugationModel[];
}

export const GermanVerbTenseSchema = new Schema<GermanVerbTenseModel>({
  tenseName: String,
  conjugations: [GermanConjugationSchema],
});

export interface GermanVerbHydratedModel {
  date: Date;
  hilfsverb: string;
  infinitive: string;
  partizip: string;
  schema_version: number;
  tenses: GermanVerbTenseModel[];
}

// eslint-disable-next-line import/prefer-default-export
export const GermanVerbHydratedSchema = new Schema<GermanVerbHydratedModel>({
  date: Date,
  infinitive: String,
  hilfsverb: String,
  partizip: String,
  schema_version: Number,
  tenses: [GermanVerbTenseSchema],
});

/*
{
  date: date updated
  schema_version
  tenses: [
    {
      tenseName: enum: [präsens, präteritum, futur, perfekt, konjunktiv, k2präsens, k2präteritum]
      conjugations: [
        {
          person: number enum: ['1033' ich, '1041' wir, '1098' du, '1106' ihr, '1548' es],
          conjugation: string
        }
      ]
    }
  ],
  ruleString: string // stringified config json
}
*/
