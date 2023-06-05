import { GermanTenses } from 'german-types';
import { Schema, Types } from 'mongoose';

import { TranslationDictionaryModel } from './languageTranslations';

export interface GermanConjugationModel {
  person: string;
  conjugation: string;
}

// export const GermanConjugationSchema = new Schema<GermanConjugationModel>({
//   person: Number,
//   conjugation: String,
// });

export interface GermanVerbTenseModel {
  tenseName: GermanTenses;
  conjugations: GermanConjugationModel[];
}

// export const GermanVerbTenseSchema = new Schema<GermanVerbTenseModel>({
//   tenseName: String,
//   conjugations: Types.DocumentArray<GermanConjugationModel>,
// });

export interface GermanVerbVariationModel {
  hilfsverb: string;
  partizip: string;
  particle: string,
  tenses: GermanVerbTenseModel[];
  translations: TranslationDictionaryModel[];
}

export const GermanVerbVariationSchema = new Schema<GermanVerbVariationModel>({
  hilfsverb: String,
  partizip: String,
  particle: String,
  tenses: Types.DocumentArray<GermanVerbTenseModel>,
  translations: Types.DocumentArray<TranslationDictionaryModel>
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
  variations: Types.DocumentArray<GermanVerbVariationModel>
});
