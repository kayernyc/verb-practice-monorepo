import express from 'express';
import cors from 'cors';

import deutschRouter from './routes/deutsch';

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

app.listen(port, () => {
  /* eslint-disable */
  console.log(`Server is runing on port ${port}`);
  /* eslint-enable */
});
