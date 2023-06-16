import { GermanTenses } from 'german-types';
import { Schema } from 'mongoose';

import {
  TranslationDictionaryModel,
  TranslationDictionaryModelSchema,
} from './languageTranslations';

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

export interface GermanVerbVariationModel {
  hilfsverb: string;
  partizip: string;
  particle: string;
  tenses: GermanVerbTenseModel[];
  translations: TranslationDictionaryModel[];
}

export const GermanVerbVariationModelSchema =
  new Schema<GermanVerbVariationModel>({
    hilfsverb: String,
    partizip: String,
    particle: String,
    tenses: [GermanVerbTenseSchema],
    translations: [TranslationDictionaryModelSchema],
  });

export const GermanVerbVariationSchema = new Schema<GermanVerbVariationModel>({
  hilfsverb: String,
  partizip: String,
  particle: String,
  tenses: [GermanConjugationSchema],
  translations: [GermanVerbVariationModelSchema],
});

export interface GermanVerbHydratedModel {
  date: Date;
  schema_version: number;
  infinitive: string;
  variations: GermanVerbVariationModel[];
}

export const GermanVerbHydratedSchema = new Schema<GermanVerbHydratedModel>({
  date: Date,
  infinitive: String,
  schema_version: Number,
  variations: [GermanVerbVariationSchema],
});
