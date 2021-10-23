import { Router } from "express";

import { germanVerbData } from "@german/germanverbs";
import { hydrateFromInfinitive } from '@german/hydrateGermanVerb';

germanVerbData();
export const deutschRouter = Router();

deutschRouter.get('/:verb', (req, res) => {
  const verb = req.params.verb.toLowerCase();
  const result = hydrateFromInfinitive(req.params.verb)
  res.send(`this is your verb: ${result}`);
});
