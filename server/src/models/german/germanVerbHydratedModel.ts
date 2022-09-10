import { Schema } from 'mongoose';

export interface GermanConjugationModel {
  person: 1033 | 1041 | 1098 | 1106 | 1548;
  conjugation: string;
}

export const GermanConjugationSchema = new Schema<GermanConjugationModel>({
  person: Number,
  conjugation: String,
});

export interface GermanVerbTenseModel {
  tenseName: string;
  conjugations: GermanConjugationModel[];
}

export const GermanVerbTenseSchema = new Schema<GermanVerbTenseModel>({
  tenseName: String,
  conjugations: [GermanConjugationSchema],
});

export interface GermanVerbHydratedModel {
  date: Date;
  infinitive: string;
  partizip: string;
  schema_version: number;
  tenses: GermanVerbTenseModel[];
}

// eslint-disable-next-line import/prefer-default-export
export const GermanVerbHydratedSchema = new Schema<GermanVerbHydratedModel>({
  date: Date,
  infinitive: String,
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
