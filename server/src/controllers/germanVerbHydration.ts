import {
  Request, Response,
} from 'express';

import { hydrateFromInfinitive } from '@german/hydrateGermanVerb';
import germanAddPronounStringsToJson from '@german/germanHydrateResponseFunctions/GermanAddPronounStringsToJson';

const germanVerbHydration = (req: Request, res: Response) => {
  const verb: string = req.params.verb?.toLowerCase();
  let message = `Verb ${verb} isn't fully hydrated.`;

  try {
    let hydratiedVerb = hydrateFromInfinitive(verb);
    if (typeof hydratiedVerb !== 'string') {
      hydratiedVerb = germanAddPronounStringsToJson(hydratiedVerb);
      message = `Verb ${verb} is successfully hydrated.`;
    }
    return res.status(200).json({ status: 200, data: hydratiedVerb, message });
  } catch (error: unknown) {
    message = 'Unknown Error';
    if (error instanceof Error) message = error.message;
    // we'll proceed, but let's report it
    return res.status(400).json({ status: 400, message });
  }
};

export default germanVerbHydration;
