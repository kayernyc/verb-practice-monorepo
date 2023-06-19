import { convertGermanVerbToHydratedGermanVerb } from 'db-types/germanDBModel';
import {
  GermanVerbHydratedModel,
  GermanVerbHydratedSchema,
} from 'db-types/germanVerbHydratedModel';
import { GermanVerbHydrated } from 'german-types';
import { LanguageVerbBase } from 'global-types';

import mongoose from 'mongoose';

export const insertGermanVerbs = async (
  de: LanguageVerbBase[],
): Promise<string> => {
  const db = mongoose.connection;
  db.on('error', (error) => {
    // eslint-disable-next-line no-console
    console.error('MongoDB connection error:', error);
  });

  const GermanModel = mongoose.model(
    'GermanVerbModel',
    GermanVerbHydratedSchema,
  );

  // if de.length is over 100k, chunck the write
  const writeGroups: GermanVerbHydratedModel[][] = [];
  let source = [...de];
  do {
    const newGroup = source
      .splice(0, 999_999)
      .map((verbRecord) =>
        convertGermanVerbToHydratedGermanVerb(verbRecord as GermanVerbHydrated),
      );

    writeGroups.push(newGroup);
  } while (source.length > 0);

  try {
    const German = mongoose.model('GermanVerbModel', GermanVerbHydratedSchema);
    await Promise.all(
      writeGroups.map((writeGroup) => {
        German.insertMany(writeGroup);
      }),
    ).then(() => {
      console.log(`Operation complete`);
    });

    return `New verbs were successfully saved to the database.`;
  } catch (err: unknown) {
    if (err instanceof Error) {
      return ` Error: ${err.message}`;
    }

    return `Error: ${{ err }}`;
  }
};
