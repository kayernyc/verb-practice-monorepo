/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */
import {
  Request, Response,
} from 'express';

import mongoose from 'mongoose';
import { GermanVerbHydratedModel, GermanVerbHydratedSchema } from '@german/germanVerbHydratedModel';

import { hydrateFromInfinitive } from '@german/hydrateGermanVerb';
import germanAddPronounStringsToJson from '@german/germanHydrateResponseFunctions/GermanAddPronounStringsToJson';

import { convertHydrationToModel } from '@german/germanDBModel';

const germanVerbHydration = async (req: Request, res: Response) => {
  const verb: string = req.params.verb?.toLowerCase();
  let message = `Verb ${verb} isn't fully hydrated.`;

  // try from db first
  const db = mongoose.connection;
  db.on('error', (error) => {
    // eslint-disable-next-line no-console
    console.error('MongoDB connection error:', error);
  });

  const GermanModel = mongoose.model('GermanVerbModel', GermanVerbHydratedSchema);
  const dbResult: unknown | GermanVerbHydratedModel = GermanModel.find(
    { infinitive: verb },
    (err: Error, doc: GermanVerbHydratedModel): unknown => {
      if (err) {
        console.log('Error:', err);
        return err;
      }
      return doc;
    },
  );

  // console.log({ dbResult });

  try {
    let hydratiedVerb = hydrateFromInfinitive(verb);
    if (typeof hydratiedVerb !== 'string') {
      hydratiedVerb = germanAddPronounStringsToJson(hydratiedVerb);
      message = `Verb ${verb} is successfully hydrated.`;
      convertHydrationToModel(hydratiedVerb);
    }
    return res.status(200).json({ status: 200, data: hydratiedVerb, message });
  } catch (error: unknown) {
    message = 'Unknown Error';
    if (error instanceof Error) message = error.message;
    // we'll proceed, but let's report it
    return res.status(400).json({ status: 400, message });
  }
};

export default germanVerbHydration;
