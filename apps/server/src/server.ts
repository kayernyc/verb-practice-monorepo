/* eslint-disable no-console */
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import mongoose from 'mongoose';

import app from './app';

dotenv.config();

let server: unknown;
const port = 3000;

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    server = app.listen(port, () => {
      console.log('app is listening');
    });
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });
