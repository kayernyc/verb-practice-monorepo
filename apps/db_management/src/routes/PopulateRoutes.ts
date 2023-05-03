import { Request, Response, RequestHandler, Router } from 'express';
import { buildAllSource } from '@controllers/PopulateController';

export const populateRouter: Router = Router();

populateRouter.get('/', (_, res) => {
  try {
    const result = buildAllSource();
    res.send(result);
  } catch (err) {
    console.log(`ERROR: ${err}`);
    res.send('Read the data');
  }
}) as RequestHandler;
