const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./utils/db');
const studentsRouter = require('./routes/students');
const userRouter = require('./routes/user');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(cors({
  credentials: true,
  origin: true
}));
app.options('*', cors());

app.get('/', (req, res) => {
    res.send('Student API');
  }
);

app.use(bodyParser.json());
app.use('/api/v1/students', studentsRouter);
app.use('/api/v1/auth', userRouter);

db.connect().then(() => {
    app.listen(port);
  }
).catch(err => {
    console.log(err);
  }
);
