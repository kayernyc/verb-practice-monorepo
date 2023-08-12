import {
  NextFunction,
  Request,
  Response,
  RequestHandler,
  Router,
} from 'express';

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('YAY _MIDDLE');
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'JWT'
  ) {
    next();
    jwt.verify(
      req.headers.authorization.split(' ')[1],
      process.env.API_SECRET,
      function (err, decode) {
        if (err) req.user = undefined;
        User.findOne({
          _id: decode.id,
        }).exec((err, user) => {
          if (err) {
            res.status(500).send({
              message: err,
            });
          } else {
            req.user = user;
            next();
          }
        });
      },
    );
  } else {
    // req.user = undefined;
    next();
  }
};
