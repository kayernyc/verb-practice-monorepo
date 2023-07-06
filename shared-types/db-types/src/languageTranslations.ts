import { Schema } from 'mongoose';

export interface TranslationDictionaryModel {
  language: string;
  translation: string;
}

export const TranslationDictionaryModelSchema =
  new Schema<TranslationDictionaryModel>({
    language: String,
    translation: String,
  });
