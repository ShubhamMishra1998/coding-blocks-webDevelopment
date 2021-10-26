const express = require("express");
const app = express();
const path = require("path");

// configuring ejs
app.set("view engine", "ejs");
// this is to tell explicitle server to use public folder for static files
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/random", (req, res) => {
  const randomNo = Math.floor(Math.random() * 100);
  //we can pass values also;
  res.render("random", { randomNo });
});

app.listen(5000, () => {
  console.log("server started listining at port 5000");
});
