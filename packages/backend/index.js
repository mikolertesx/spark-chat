const express = require("express");
const cors = require("cors");
const app = express();
const { Server } = require("socket.io");
const io = new Server(8100, {
  cors: {
    origin: ['http://localhost:3000']
  }
});

app.use(cors());

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send({ message: "hello world" });
});

// When user connects
io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("send-message", (message) => {
    io.emit('receive-message', message);
    console.log(`received message: ${message}`);
  });
});

app.listen(8000);
