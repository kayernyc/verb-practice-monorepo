import { Router } from "express";

import { germanVerbData } from "@german/germanVerbs";
import { hydrateFromInfinitive } from '@german/hydrateGermanVerb';


germanVerbData();
export const deutschRouter = Router();

deutschRouter.get('/:verb', async (req, res) => {
  const verb = req.params.verb.toLowerCase();
  const result = await hydrateFromInfinitive(req.params.verb)
  res.send(`this is your verb: ${result}`);
});
