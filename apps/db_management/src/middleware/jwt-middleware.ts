import {
  NextFunction,
  Request,
  Response,
  RequestHandler,
  Router,
} from 'express';

import jwt from 'jsonwebtoken';

const handleTokenExpired = (res: Response) => {
  res.status(401).json({
    success: false,
    status: 401,
    message: 'Token expired.',
  });
};

const handlePremature = (res: Response) => {
  // 412 Precondition Failed
  res.status(412).json({
    success: false,
    status: 412,
    message: 'Precondition failed.',
  });
};

const handleMalformed = (res: Response) => {
  res.status(401).json({
    success: false,
    status: 401,
    message: 'Error in token composition.',
  });
};

const strategyMap = {
  TokenExpiredError: handleTokenExpired,
  JsonWebTokenError: handleMalformed,
  NotBeforeError: handlePremature,
};

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
        // TODO: Adding logging functions
        if (err) {
          try {
            strategyMap[err.name](res);
          } catch (err) {
            res.status(401).json({
              success: false,
              status: 401,
              message: 'Error: Unknown Error.',
            });
          }
        } else {
          console.log('no err');
          next();
        }
      },
    );
  }
};
