import { Schema } from 'mongoose';

interface GermanConjugationModel {
  person: 1033 | 1041 | 1098 | 1106 | 1548;
  conjugation: string;
}

const GermanConjugationSchema = new Schema<GermanConjugationModel>({
  person: Number,
  conjugation: String,
});

interface GermanVerbTenseModel {
  tenseName: string;
  conjugations: GermanConjugationModel[];
}

const GermanVerbTenseSchema = new Schema<GermanVerbTenseModel>({
  tenseName: String,
  conjugations: [GermanConjugationSchema],
});

interface GermanVerbHydratedModel {
  date: Date;
  schema_version: number;
  tenses: GermanVerbTenseModel[];
}

// eslint-disable-next-line import/prefer-default-export
export const GermanVerbHydratedSchema = new Schema<GermanVerbHydratedModel>({
  date: Date,
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
