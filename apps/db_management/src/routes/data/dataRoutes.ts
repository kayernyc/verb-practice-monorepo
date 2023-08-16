import {
  NextFunction,
  Request,
  Response,
  RequestHandler,
  Router,
} from 'express';

export const dataRouter: Router = Router();

const fullday = 86_400; // 1 day
const quarterHour = 900; // 1 day

dataRouter.post('/', async (req, res) => {
  console.log({ req });
  try {
    res.send({ message: 'here it got through' }).status(201);
  } catch (err) {
    console.log(`ERROR: ${err}`);
    res.send('Read the data');
  }
}) as RequestHandler;
