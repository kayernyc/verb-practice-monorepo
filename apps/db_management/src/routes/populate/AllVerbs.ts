import { RequestHandler, Router } from 'express';
import { buildAllSource } from '@controllers/PopulateController';
import { insertGermanVerbs } from 'services/insertGermanVerbs';

export const allVerbsRouter: Router = Router();

allVerbsRouter.get('/', (_, res) => {
  try {
    const result = buildAllSource();
    res.send(result);
  } catch (err) {
    console.log(`ERROR: ${err}`);
    res.send('Read the data');
  }
}) as RequestHandler;

allVerbsRouter.put('/de', async (_, res) => {
  try {
    const result = buildAllSource();
    const message = await insertGermanVerbs(result.de);
    res.send(message);
  } catch (err) {
    console.log(`ERROR: ${err}`);
    res.send('Read the data');
  }
}) as RequestHandler;
