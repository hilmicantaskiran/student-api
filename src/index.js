const express = require('express');
const bodyParser = require('body-parser');

const db = require('./utils/db');
const studentsRouter = require('./routes/students');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Student API');
  }
);

app.use(bodyParser.json());
app.use('/api/v1/students', studentsRouter);

db.connect().then(() => {
    app.listen(port);
  }
).catch(err => {
    console.log(err);
  }
);
