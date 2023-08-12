import {
  NextFunction,
  Request,
  Response,
  RequestHandler,
  Router,
} from 'express';

export const verifyBearerToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ error: 'No credentials sent.' });
  }
  next();
};
