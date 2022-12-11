import {
  Request, Response, RequestHandler, Router,
} from 'express';

import { germanVerbData } from '@german/germanBuildJsonFromYml';

import germanVerbHydration from '../controllers/germanVerbHydration';

germanVerbData();
const deutschRouter: Router = Router();

deutschRouter.get('/:verb', (req: Request, res: Response) => {
  germanVerbHydration(req, res).catch((err: Error) => {
    res.status(500).json({ status: 500, message: err.message });
  });
}) as RequestHandler;

export default deutschRouter;
