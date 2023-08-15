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
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    jwt.verify(
      req.headers.authorization.split(' ')[1],
      process.env.AUTH_TOKEN,
      (err, decode) => {
        if (err) {
          console.log({ err });
          res.status(401).json({
            success: false,
            status: 401,
            message: err.message,
          });
        } else {
          console.log('no err');
          next();
        }
      },
    );
  }
};
