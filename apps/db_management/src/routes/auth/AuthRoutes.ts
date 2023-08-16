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

const fullday = 86_400; // 1 day
const quarterHour = 60 * 15 * 1000; // 15 minutes
const second = 1000;

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

authRouter.get('/', async (req, res) => {
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

  if (process.env.AUTH_TOKEN && email && password && email === 'me@test.com') {
    let cookie = req.cookies.cookieName;
    if (cookie === undefined) {
      // no: set a new cookie
      var randomNumber = Math.random().toString();
      randomNumber = randomNumber.substring(2, randomNumber.length);
      res.cookie('dbm_site', randomNumber, {
        maxAge: 900000,
        httpOnly: true,
        secure: true,
        sameSite: true,
      });
      console.log('cookie created successfully');
    } else {
      // yes, cookie was already present
      console.log('cookie exists', cookie);
    }
    // create token
    const token = jwt.sign(
      {
        id: email,
      },
      process.env.AUTH_TOKEN,
      {
        expiresIn: quarterHour,
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
