import {
  Request, Response, RequestHandler, Router,
} from 'express';

import { germanVerbData } from '@german/germanVerbs';
import germanVerbHydration from '../controllers/germanVerbHydration';

germanVerbData();
const deutschRouter: Router = Router();

deutschRouter.get('/:verb', (req: Request, res: Response) => {
  const result = germanVerbHydration(req, res);

  // res.status(200).send('success');
}) as RequestHandler;

export default deutschRouter;
