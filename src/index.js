const cors = require('cors');
const http = require("http");
const express = require('express');
const socketIO = require("socket.io");
const bodyParser = require('body-parser');

const db = require('./utils/db');
const userRouter = require('./routes/user');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(cors({
  credentials: true,
  origin: '*'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Student API');
  }
);

io.on("connection", socket => {
  console.log(`New client connected: ${socket.id}`);""

  socket.on("message", message => {
    console.log(`Received message: ${message}`);
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

app.use('/api/v1/auth', userRouter);

db.connect().then(() => {
    server.listen(port);
  }
).catch(err => {
    console.log(err);
  }
);
