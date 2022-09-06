import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express';
import cors from 'cors';

import deutschRouter from './routes/deutsch';

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
  res.send('Welcome to your server');
});

app.use('/de', deutschRouter);

app.use((_, res) => {
  res.status(404);
  res.send('404: File Not Found');
});

export default app;

/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://verbAPI_dbUser:<password>@cluster0.28qnidw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/
