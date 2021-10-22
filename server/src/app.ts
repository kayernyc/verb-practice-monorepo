import 'module-alias/register';
import express from 'express';
const app = express();
import cors from 'cors';
const port = 3000;

import { germanVerbData } from 'german/germanverbs';
import { hydrateFromInfinitive } from 'german/hydrateGermanVerb';

germanVerbData();

// We are using our packages here
app.use(express.json()); // to support JSON-encoded bodies

app.use(
  express.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to your server');
});

app.get('/:verb', (req, res) => {
  const verb = req.params.verb.toLowerCase();
  const result = hydrateFromInfinitive(req.params.verb)
  res.send(`this is your verb: ${result}`);
});

app.listen(port, () => {
  // tslint:disable-next-line: no-console
  console.log(`Server is runing on port ${port}`);
});
