import {
  Request, Response, RequestHandler, Router,
} from 'express';

import { germanVerbData } from '@german/germanVerbs';

import germanVerbHydration from '../controllers/germanVerbHydration';

germanVerbData();
const deutschRouter: Router = Router();

deutschRouter.get('/:verb', (req: Request, res: Response) => {
  germanVerbHydration(req, res);
}) as RequestHandler;

export default deutschRouter;
