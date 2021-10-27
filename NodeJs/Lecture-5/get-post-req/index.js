const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/user", (req, res) => {
  res.send("get request");
});

app.post("/user", (req, res) => {
  res.send("post");
});

app.listen(3000, () => {
  console.log("server listinig at port 3000");
});
