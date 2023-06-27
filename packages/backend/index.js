const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send({ message: "hello world" });
});

app.listen(8000);
