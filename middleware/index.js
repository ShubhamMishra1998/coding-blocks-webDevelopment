const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("my first middleware");
  // it will direct you to next middleware
  req.username = "shubham1";
  req.password = "abcd";

  next();
});

app.get("/", (req, res) => {
  res.send("home route");
});

const verify = (req, res, next) => {
  const { username, password } = req;
  if (username === "shubham" && password === "abcd") {
    next();
  } else {
    res.send("authenticatiion failid");
  }
};

app.get("/login", verify, (req, res) => {
  res.send("login succesful");
});

app.listen(5000, () => {
  console.log("server running at port 5000");
});
