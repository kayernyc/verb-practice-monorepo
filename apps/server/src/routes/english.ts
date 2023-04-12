import {
  Request, Response, RequestHandler, Router,
} from 'express';

const englishRouter: Router = Router();

englishRouter.get('/:verb', (req: Request, res: Response) => {
  res.status(200).json({ status: 500, message: 'english router exists' });
}) as RequestHandler;

export default englishRouter;
