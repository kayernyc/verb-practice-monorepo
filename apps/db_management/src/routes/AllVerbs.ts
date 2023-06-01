import { RequestHandler, Router } from 'express';
import { buildAllSource } from '@controllers/PopulateController';
import stream from 'stream';

export const allVerbsRouter: Router = Router();

allVerbsRouter.get('/', (_, res) => {
  try {
    const result = buildAllSource();

    const fileContents = Buffer.from(JSON.stringify(result), 'utf8');
    const readStream = new stream.PassThrough();
    readStream.end(fileContents);

    res.set('Content-disposition', 'attachment; filename=allverbs.json');
    res.set('Content-Type', 'application/json');
    readStream.pipe(res);
  } catch (err) {
    console.log(`ERROR: ${err}`);
    res.send('Read the data');
  }
}) as RequestHandler;
