import { convertGermanVerbToHydratedGermanVerb } from 'db-types/germanDBModel';
import { GermanVerbHydratedSchema } from 'db-types/germanVerbHydratedModel';
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

  const hydratedSchema = convertGermanVerbToHydratedGermanVerb(
    de[0] as GermanVerbHydrated,
  );

  const newVerb = new GermanModel(hydratedSchema);

  try {
    const message = await newVerb.save();
    console.log(message);
    return `New verb was successfully saved to the database.`;
  } catch (err: unknown) {
    if (err instanceof Error) {
      return ` Error: ${err.message}`;
    }

    return `Error: ${{ err }}`;
  }
};
