import { GermanTenses } from 'german-types';
import { Schema } from 'mongoose';

import { TranslationDictionaryModel } from './languageTranslations';

export interface GermanConjugationModel {
  person: string;
  conjugation: string;
}

export interface GermanVerbTenseModel {
  tenseName: GermanTenses;
  conjugations: GermanConjugationModel[];
}

export interface GermanVerbVariationModel {
  hilfsverb: string;
  partizip: string;
  particle: string;
  tenses: GermanVerbTenseModel[];
  translations: TranslationDictionaryModel[];
}

export interface GermanVerbHydratedModel {
  date: Date;
  infinitive: string;
  schema_version: number;
  variations: GermanVerbVariationModel[];
}

const ConjugationSchema = new Schema({
  person: { type: String, required: true },
  conjugation: { type: String, required: true },
});

const TenseSchema = new Schema({
  tenseName: { type: String, required: true },
  conjugations: { type: [ConjugationSchema], required: true },
});

const GermanVariationSchema = new Schema({
  hilfsverb: { type: String, required: true },
  partizip: { type: String, required: true },
  particle: { type: String, required: false },
  tenses: { type: [TenseSchema], required: true },
  translations: {
    type: Schema.Types.Mixed,
    of: { type: [String], required: true },
    required: true,
  },
});

export const GermanVerbHydratedSchema = new Schema({
  date: { type: Date, required: true },
  infinitive: { type: String, required: true },
  schema_version: { type: Number, required: true },
  variations: { type: [GermanVariationSchema], required: true },
});
