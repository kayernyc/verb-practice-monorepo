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
  dative: boolean;
  genitive: boolean;
  hilfsverb: string;
  impersonal: boolean;
  particle: string;
  partizip: string;
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
  dative: { type: Boolean, required: true },
  genitive: { type: Boolean, required: true },
  hilfsverb: { type: String, required: true },
  impersonal: { type: String, required: true },
  particle: { type: String, required: false },
  partizip: { type: String, required: true },
  tenses: { type: [TenseSchema], required: true },
  translations: {
    type: Schema.Types.Mixed,
    of: { type: [String], required: true },
    required: true,
  },
});

export const GermanVerbHydratedSchema = new Schema({
  date: { type: Date, required: true },
  infinitive: { type: String, required: true, unique: true },
  schema_version: { type: Number, required: true },
  variations: { type: [GermanVariationSchema], required: true },
});
