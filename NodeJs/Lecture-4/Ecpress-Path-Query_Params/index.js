const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("root path");
});

app.get("/search", (req, res) => {
  console.log(req.query);
  res.send("you made a request");
});

app.listen(5000, () => {
  console.log("server started listining at port 5000");
});

// path and variable****************************************************
app.get("/r/:subredit", (req, res) => {
  // console.log(req.params);
  const { subredit } = req.params;
  res.send(`<h1>This is requested ${subredit}</h1>`);
});

app.get("/user/:userid/comments/:comments", (req, res) => {
  console.log(req.params);
  res.send("user route");
});
