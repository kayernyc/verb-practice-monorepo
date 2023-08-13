import {
  NextFunction,
  Request,
  Response,
  RequestHandler,
  Router,
} from 'express';

import jwt from 'jsonwebtoken';

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('YAY _MIDDLE');
  const { headers } = req;
  console.log({ headers }, '<<<');
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    jwt.verify(
      req.headers.authorization.split(' ')[1],
      process.env.AUTH_TOKEN,
      function (err, decode) {
        if (typeof decode !== 'string') {
          console.log({ decode });
        }
        console.table(err.message);
        if (err) {
          if (err.message === 'jwt expired') {
            res.sendStatus(401).json('Error: Timelimit exceeded.');
          }
        }
        next();
      },
    );
  } else {
    // req.user = undefined;
    next();
  }
};
