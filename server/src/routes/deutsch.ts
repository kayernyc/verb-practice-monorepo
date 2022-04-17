import {
  Request, Response, RequestHandler, Router,
} from 'express';

import { germanVerbData } from '@german/germanVerbs';
import { hydrateFromInfinitive } from '@german/hydrateGermanVerb';

germanVerbData();
const deutschRouter: Router = Router();

deutschRouter.get('/:verb', (req: Request, res: Response) => {
  const verb = req.params.verb.toLowerCase();
  const result = hydrateFromInfinitive(verb);

  res.status(200).send(`this is your verb: ${JSON.stringify(result, null, 2)}`);
}) as RequestHandler;

export default deutschRouter;
