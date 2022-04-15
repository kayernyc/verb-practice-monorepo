import {
  Request, Response,
} from 'express';
// import { JSON_DATA } from '../models/jsonTypes';

/* eslint-disable @typescript-eslint/no-unsafe-call */
type PronounMappingFunction = (bitwisePerson: number) => string;
type HydrationFunction = (infinitive: string) => string;

export default function languageBasedHydration(
  hydrationFunction: HydrationFunction,
  pronounMapping: PronounMappingFunction,
) {
  return (req: Request, res: Response, next?) => {
    const verb: string = req.params.verb?.toLowerCase();
    // const result = hydrateFromInfinitive(verb);

    const sourceJson: string = hydrationFunction(verb);
    console.log(sourceJson);
    // res.json(sourceJson);

    if (typeof next === 'function') {
      next();
    }
    // return pronounMapping(sourceJson);
  };
}
