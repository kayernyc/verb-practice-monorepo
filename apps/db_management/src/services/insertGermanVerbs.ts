import { convertGermanVerbToHydratedGermanVerb } from 'db-types/germanDBModel';
import { GermanVerbHydrated } from 'german-types';
import { LanguageVerbBase } from 'global-types';

import mongoose from 'mongoose';

export const insertGermanVerbs = async (de: LanguageVerbBase[]) => {
  // const db = mongoose.connection;
  // db.on('error', (error) => {
  //   // eslint-disable-next-line no-console
  //   console.error('MongoDB connection error:', error);
  // });

  // console.log({ de });
  convertGermanVerbToHydratedGermanVerb(de[0] as GermanVerbHydrated);
};
