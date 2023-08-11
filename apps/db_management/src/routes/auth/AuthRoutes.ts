import {
  NextFunction,
  Request,
  Response,
  RequestHandler,
  Router,
} from 'express';
import jwt from 'jsonwebtoken';
import path from 'path';
import scripts from '../../views/authViews/js/auth';

export const authRouter: Router = Router();

const verifyBearerToken = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ error: 'No credentials sent.' });
  }
  next();
};

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  console.log('YAY _MIDDLE');
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'JWT'
  ) {
    next();
    // jwt.verify(req.headers.authorization.split(' ')[1], process.env.API_SECRET, function (err, decode) {
    //   if (err) req.user = undefined;
    //   User.findOne({
    //       _id: decode.id
    //     })
    //     .exec((err, user) => {
    //       if (err) {
    //         res.status(500)
    //           .send({
    //             message: err
    //           });
    //       } else {
    //         req.user = user;
    //         next();
    //       }
    //     })
    // });
  } else {
    // req.user = undefined;
    next();
  }
};

const successHandler = (): string => {
  try {
    const root = process.env.APP_ROOT;
    if (root && typeof root === 'string') {
      return path.join(root, 'views', 'authViews', 'signInSuccess.ejs');
    } else {
      throw Error('Internal Server Error: missing view.');
    }
  } catch (err) {
    console.log(`ERROR: ${err}`);
    throw Error('Internal Server Error: missing view.');
  }
};

authRouter.get('/', verifyToken, async (req, res) => {
  try {
    const root = process.env.APP_ROOT;

    if (root && typeof root === 'string') {
      const pathToPage = path.join(root, 'views', 'authViews', 'signIn.ejs');
      res.render(pathToPage);
    } else {
      res.send('here');
    }
  } catch (err) {
    console.log(`ERROR: ${err}`);
    res.send('Read the data');
  }
}) as RequestHandler;

authRouter.get('/signup', async (req, res) => {
  try {
    const root = process.env.APP_ROOT;
    if (root && typeof root === 'string') {
      const pathToPage = path.join(root, 'views', 'authViews', 'signUp.ejs');
      res.render(pathToPage);
    } else {
      res.send('here');
    }
  } catch (err) {
    console.log(`ERROR: ${err}`);
    res.send('Read the data');
  }
}) as RequestHandler;

authRouter.post('/signup', async (req, res) => {
  try {
    const root = process.env.APP_ROOT;
    if (root && typeof root === 'string') {
      res.send('here');
    }
  } catch (err) {
    console.log(`ERROR: ${err}`);
    res.send('Read the data');
  }
}) as RequestHandler;

authRouter.post('/signin', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log('aadflj>>>>>>>', { email });

  if (email && password && email === 'me@test.com') {
    // create token
    const token = jwt.sign(
      {
        id: email,
      },
      process.env.AUTH_TOKEN,
      {
        expiresIn: 86_400, // 1 day
      },
    );

    try {
      return res.status(200).send({
        user: {
          id: 123213, // user._id,
          email,
          fullName: 'bob',
        },
        message: 'Login successfull',
        accessToken: token,
      });
    } catch (err) {
      return res.send(err).status(500);
    }
  }
  const root = process.env.APP_ROOT;
  const pathToPage = path.join(
    root,
    'views',
    'authViews',
    'signInTryAgain.ejs',
  );
  res.render(pathToPage);
}) as RequestHandler;

// exports.signup = (req, res) => {
//   const user = new User({
//     fullName: req.body.fullName,
//     email: req.body.email,
//     role: req.body.role,
//     password: bcrypt.hashSync(req.body.password, 8)
//   });

//   user.save((err, user) => {
//     if (err) {
//       res.status(500)
//         .send({
//           message: err
//         });
//       return;
//     } else {
//       res.status(200)
//         .send({
//           message: "User Registered successfully"
//         })
//     }
//   });
// };
