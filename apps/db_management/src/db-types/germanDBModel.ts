/* eslint-disable no-console */
import { GermanTenses, GermanVerbHydrated } from 'german-types';
import {
  GermanVerbTenseModel,
  GermanVerbVariationModel,
  GermanVerbHydratedModel,
} from './germanVerbHydratedModel';

const germanTenses: string[] = Object.values(GermanTenses);

// convert GermanVerbHydratedModel
export const convertGermanVerbToHydratedGermanVerb = (
  verb: GermanVerbHydrated,
): GermanVerbHydratedModel => {
  const { infinitive, variations } = verb;

  const germanVerbVariations = variations.map((variation) => {
    const tenses: GermanVerbTenseModel[] = [];
    const { hilfsverb, partizip, particle, translations } = variation;

    for (const [keyword, value] of Object.entries(variation)) {
      if (germanTenses.includes(keyword)) {
        let conjugations = Object.entries(value).map((entry) => {
          const [person, conjugation] = entry;
          return { person, conjugation };
        });

        const newTense: GermanVerbTenseModel = {
          tenseName: GermanTenses[keyword as keyof typeof GermanTenses],
          conjugations,
        };

        tenses.push(newTense);
      }
    }

    return {
      hilfsverb,
      particle,
      partizip,
      tenses,
      translations,
    } as GermanVerbVariationModel;
  });

  return {
    date: new Date(),
    infinitive,
    schema_version: 1,
    variations: germanVerbVariations,
  };
};
