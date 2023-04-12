/* eslint-disable no-console */
import { GermanTenses, GermanVerbHydrated } from '@german/germanTypes';
import { GermanConjugationModel, GermanVerbTenseModel, GermanVerbHydratedModel } from '@german/germanVerbHydratedModel';

const germanTenses = Object.values(GermanTenses);

// convert GermanVerbHydratedModel
export const convertHydrationToModel = (verb: GermanVerbHydrated): GermanVerbHydratedModel => {
  const tenses: GermanVerbTenseModel[] = [];

  Object.keys(verb).forEach((key: string) => {
    if (germanTenses.includes(key as unknown as GermanTenses)) {
      // it's a tense conjugation object
      const tense = GermanTenses[key] as GermanTenses;
      let conjugations: GermanConjugationModel[] = [];
      const obj = verb[key] as { [person: string]: string }[];

      // [ '1033', { subjectPronoun: 'ich', verbConjugation: 'fiele' } ]

      conjugations = Object.entries(obj).map((entry) => {
        const [person, { verbConjugation }] = entry;
        console.log({ person }, { verbConjugation });
        return { person, conjugation: verbConjugation };
      });

      const newTense: GermanVerbTenseModel = {
        tenseName: tense,
        conjugations,
      };

      tenses.push(newTense);
    }
  });

  const newGermanVerHydratedSchemaObj: GermanVerbHydratedModel = {
    date: new Date(),
    infinitive: verb.infinitive,
    hilfsverb: verb.hilfsverb,
    partizip: verb.partizip,
    schema_version: 1,
    tenses,
  };

  return newGermanVerHydratedSchemaObj;
};
