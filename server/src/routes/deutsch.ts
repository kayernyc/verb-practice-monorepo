import { RequestHandler, Router } from 'express';

import { germanVerbData } from '@german/germanVerbs';
import { hydrateFromInfinitive } from '@german/hydrateGermanVerb';

germanVerbData();
const deutschRouter: Router = Router();

deutschRouter.get('/:verb', (req, res) => {
  const verb = req.params.verb.toLowerCase();
  const result = hydrateFromInfinitive(verb);
  res.status(200).send(`this is your verb: ${result}`);
}) as RequestHandler;

export default deutschRouter;
