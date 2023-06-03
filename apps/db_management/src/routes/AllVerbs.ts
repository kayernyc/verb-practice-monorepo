import { RequestHandler, Router } from 'express';
import { buildAllSource } from '@controllers/PopulateController';
import stream from 'stream';

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
