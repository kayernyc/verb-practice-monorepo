import * as dotenv from 'dotenv'; 
import mongoose from 'mongoose';

import createApp from './app';

dotenv.config();
const port = 3030;

const app = createApp().then(app => {
  if (process.env.DB_URL) {
    mongoose
      .connect(process.env.DB_URL)
      .then(() => {
        console.log('Successfully connected to MongoDB Atlas!');

        app.listen(port, () => {
          console.log('app is listening');
        });
      })
      .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
      });
  }
}).catch((err) => {
  console.warn(`Error: ${err}`);
})
