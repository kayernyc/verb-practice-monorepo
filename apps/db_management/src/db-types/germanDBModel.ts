/* eslint-disable no-console */
import { GermanTenses, GermanVerbHydrated } from 'german-types';
import {
  GermanConjugationModel,
  GermanVerbTenseModel,
  GermanVerbHydratedModel,
} from './germanVerbHydratedModel';

const germanTenses: string[] = Object.values(GermanTenses);

// convert GermanVerbHydratedModel
export const convertGermanVerbToHydratedGermanVerb = (
  verb: GermanVerbHydrated,
) => {
  // GermanVerbHydratedModel[]
  const tenses: GermanVerbTenseModel[] = [];
  const verbs: GermanVerbHydratedModel[] = [];

  const { infinitive, language, variations } = verb;

  variations.forEach((variation) => console.log({ variation }));
};
