import { convertGermanVerbToHydratedGermanVerb } from 'db-types';
import { GermanVerbHydratedModel, GermanVerbHydratedSchema } from 'db-types';
import { GermanVerbHydrated } from 'german-types';
import { LanguageVerbBase } from 'global-types';

import mongoose from 'mongoose';

const mongoDbCollectionName = 'germanVerbs';

export const insertGermanVerbs = async (
  de: LanguageVerbBase[],
): Promise<string> => {
  const db = mongoose.connection;
  db.on('error', (error) => {
    // eslint-disable-next-line no-console
    console.error('MongoDB connection error:', error);
  });

  const GermanModel = mongoose.model(
    mongoDbCollectionName,
    GermanVerbHydratedSchema,
  );

  // if de.length is over 100k, chunck the write
  const writeGroups: GermanVerbHydratedModel[][] = [];
  let source = [...de];
  console.log('got here');
  do {
    const newGroup = source
      .splice(0, 999_999)
      .map((verbRecord) =>
        convertGermanVerbToHydratedGermanVerb(verbRecord as GermanVerbHydrated),
      );

    writeGroups.push(newGroup);
  } while (source.length > 0);

  try {
    const German = mongoose.model(
      mongoDbCollectionName,
      GermanVerbHydratedSchema,
    );
    await Promise.all(
      writeGroups.map((writeGroup) => {
        German.insertMany(writeGroup, { ordered: false });
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
