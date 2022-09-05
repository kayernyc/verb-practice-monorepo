import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express';
import cors from 'cors';

import deutschRouter from './routes/deutsch';

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json()); // to support JSON-encoded bodies

app.use(
  express.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  }),
);
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to your server');
});

app.use('/de', deutschRouter);

export default app;

/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://verbAPI_dbUser:<password>@cluster0.28qnidw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/
