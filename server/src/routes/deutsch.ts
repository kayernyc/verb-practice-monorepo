import {
  Request, Response, RequestHandler, Router,
} from 'express';

import { germanVerbData } from '@german/germanVerbs';
import { hydrateFromInfinitive } from '@german/hydrateGermanVerb';
import GermanPronounsCodeToString from '@german/germanHydrateResponseFunctions/GermanPronounsCodeToString';
import languageBasedHydration from '../controllers/hydrateFromInfinitive';

germanVerbData();
const deutschRouter: Router = Router();

const formatJson = languageBasedHydration(hydrateFromInfinitive, GermanPronounsCodeToString);

deutschRouter.get('/:verb', (req: Request, res: Response) => {
  const verb = req.params.verb.toLowerCase();
  const result = hydrateFromInfinitive(verb);
  formatJson(req, res);
  res.status(200).send(`this is your verb: ${result}`);
}) as RequestHandler;

export default deutschRouter;
