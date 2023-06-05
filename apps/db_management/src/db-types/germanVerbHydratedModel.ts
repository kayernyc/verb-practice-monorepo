import { GermanTenses } from 'german-types';
import { Schema } from 'mongoose';

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
