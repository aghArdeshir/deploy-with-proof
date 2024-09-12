const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World from app1");
});

app.listen(80);
