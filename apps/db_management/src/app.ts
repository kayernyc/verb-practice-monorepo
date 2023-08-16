import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';

import { verifyBearerToken } from './middleware/bearer-token';
import { verifyToken } from './middleware/jwt-middleware';

import { authRouter } from './routes/auth/AuthRoutes';
import { dataRouter } from './routes/data/DataRoutes';

import cookieParser from 'cookie-parser';

process.env.APP_ROOT = __dirname;

export const createApp = async (): Promise<Application> => {
  const app: Application = express();
  app.set('view engine', 'ejs');

  app.use(express.json()); // to support JSON-encoded bodies
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
  );

  app.use(function (req, res, next) {
    res.header({
      'Access-Control-Allow-Origin': ['http://localhost:3000'],
      'Access-Control-Allow-Headers': 'Content-Type',
      allowCredentials: true,
    });

    next();
  });

  app.use(
    express.urlencoded({
      // to support URL-encoded bodies
      extended: true,
    }),
  );

  app.use(cookieParser());

  app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'views/index');
    res.render(filePath);
    // res.send('Welcome to db management server');
  });

  app.use('/auth', authRouter);

  if (process.env.POPULATE) {
    const { populateRouter } = await import('./routes/populate/PopulateRoutes');
    const { allVerbsRouter } = await import('./routes/populate/AllVerbs');
    app.use('/populate', populateRouter);
    app.use('/sources/allverbs', allVerbsRouter);
  }

  app.use('/data', verifyToken, dataRouter);

  app.use((_, res) => {
    res.status(404);
    res.send('404: File Not Found');
  });

  app.use(express.static('public'));

  return app;
};

export default createApp;
