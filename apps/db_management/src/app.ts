import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express, { Application } from 'express';
import cors from 'cors';

dotenv.config();
process.env.APP_ROOT = __dirname;

export const createApp = async (): Promise<Application> => {
  const app: Application = express();
  
  app.use(express.json()); // to support JSON-encoded bodies
  app.use(cors());
  
  app.use(
    express.urlencoded({
      // to support URL-encoded bodies
      extended: true,
    }),
  );
  
  app.get('/', (req, res) => {
    res.send('Welcome to db management server');
  });
  
  if (process.env.POPULATE) {
    const { populateRouter }  = await import('./routes/PopulateRoutes');
    app.use('/populate', populateRouter);
  }
  
  app.use((_, res) => {
    res.status(404);
    res.send('404: File Not Found');
  });

  return app;
}

export default createApp;
