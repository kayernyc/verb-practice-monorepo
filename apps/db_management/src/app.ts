import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';

process.env.APP_ROOT = __dirname;

export const createApp = async (): Promise<Application> => {
  const app: Application = express();
  app.set('view engine', 'ejs');

  app.use(express.json()); // to support JSON-encoded bodies
  app.use(cors());

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

  if (process.env.POPULATE) {
    const { populateRouter } = await import('./routes/populate/PopulateRoutes');
    const { allVerbsRouter } = await import('./routes/populate/AllVerbs');
    app.use('/populate', populateRouter);
    app.use('/sources/allverbs', allVerbsRouter);
  }

  app.use((_, res) => {
    res.status(404);
    res.send('404: File Not Found');
  });

  app.use(express.static('public'));

  return app;
};

export default createApp;
