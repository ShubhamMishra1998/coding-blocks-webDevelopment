const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middleware to parse the data sent by  the form
app.use(express.urlencoded({ extended: true }));
// middleware to parse the json data populare the req body
app.use(express.json());
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/user", (req, res) => {
  res.send("get request");
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("post");
});

app.listen(3000, () => {
  console.log("server listinig at port 3000");
});
