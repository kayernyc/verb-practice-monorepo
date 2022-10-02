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
  const dbResult: GermanVerbHydratedModel[] = await GermanModel.find(
    { infinitive: verb },
  );
  let status = 500;

  if (dbResult.length > 0) {
    const retrievedVerb = dbResult[0];
    const verbToClient = (
      ({
        infinitive, hilfsverb, partizip, tenses,
      }) => ({
        infinitive, hilfsverb, partizip, tenses,
      }))(retrievedVerb);
    status = 200;
    return res.status(status).json({ status, data: verbToClient, message });
  }

  try {
    let hydratiedVerb = hydrateFromInfinitive(verb);
    if (typeof hydratiedVerb !== 'string') {
      hydratiedVerb = germanAddPronounStringsToJson(hydratiedVerb);
      message = `Verb ${verb} is successfully hydrated.`;
      const dataBaseReadyVerb = convertHydrationToModel(hydratiedVerb);
      const newVerb = new GermanModel(dataBaseReadyVerb);
      newVerb.save()
        .then(() => {
          console.log(`New verb ${verb} was successfully saved to the database.`);
          status = 200;
        })
        .catch((err: Error) => {
          console.log(` Error: ${err.message}`);
          res.status(500).json({ status, message: err.message });
        });

      return res.status(status).json({ status, data: dataBaseReadyVerb, message });
    }

    throw Error('Verb is not hydrated');
  } catch (error: unknown) {
    message = 'Unknown Error';
    if (error instanceof Error) message = error.message;
    return res.status(status).json({ status, message });
  }
};

export default germanVerbHydration;
