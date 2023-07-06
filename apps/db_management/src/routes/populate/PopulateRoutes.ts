import { buildAllSource } from '@controllers/PopulateController';
import { RequestHandler, Router } from 'express';
// import { buildAllSource } from '@controllers/PopulateController';
import path from 'path';

export const populateRouter: Router = Router();

populateRouter.get('/', (_, res) => {
  try {
    const result = buildAllSource();
    // insertGermanVerbs(result.de);

    const root = process.env.APP_ROOT;
    if (root && typeof root === 'string') {
      const pathToPage = path.join(root, 'views', 'populate.ejs');
      res.render(pathToPage);
    } else {
      res.send(result);
    }
  } catch (err) {
    console.log(`ERROR: ${err}`);
    res.send('Read the data');
  }
}) as RequestHandler;
