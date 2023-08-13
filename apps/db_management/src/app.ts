import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';

import { verifyBearerToken } from './middleware/bearer-token';
import { verifyToken } from './middleware/jwt-middleware';

import { authRouter } from './routes/auth/AuthRoutes';
import { dataRouter } from 'routes/data/dataRoutes';

process.env.APP_ROOT = __dirname;

export const createApp = async (): Promise<Application> => {
  const app: Application = express();
  app.set('view engine', 'ejs');

  app.use(express.json()); // to support JSON-encoded bodies
  app.use(cors({ origin: '*' }));

  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
  });

  app.use(
    express.urlencoded({
      // to support URL-encoded bodies
      extended: true,
    }),
  );

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
