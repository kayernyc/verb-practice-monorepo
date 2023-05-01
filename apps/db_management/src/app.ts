import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express';
import cors from 'cors';

dotenv.config();

const app = express();

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


app.use((_, res) => {
  res.status(404);
  res.send('404: File Not Found');
});

export default app;