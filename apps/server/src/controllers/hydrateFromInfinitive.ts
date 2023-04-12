import {
  Request, Response,
} from 'express';

/* eslint-disable @typescript-eslint/no-unsafe-call */
type PronounMappingFunction = (bitwisePerson: number) => string;
type HydrationFunction = <R>(infinitive: string) => R | string;

export default function languageBasedHydration(
  hydrationFunction: HydrationFunction,
  pronounMapping: PronounMappingFunction,
) {
  return (req: Request, res: Response, next?) => {
    const verb: string = req.params.verb?.toLowerCase();
    // const result = hydrateFromInfinitive(verb);

    const sourceJson = hydrationFunction(verb);
    console.log(sourceJson);
    // res.json(sourceJson);

    if (typeof next === 'function') {
      next();
    }
    // return pronounMapping(sourceJson);
  };
}
