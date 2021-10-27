const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
const { v4: uuid } = require("uuid");
app.use(express.urlencoded({ extended: true }));
const comments = [
  {
    id: uuid(),
    username: "Sabeel",
    text: "Nice Product.Go for It!!",
  },
  {
    id: uuid(),
    username: "Kartik",
    text: "Bad Product dont buy it",
  },
  {
    id: uuid(),
    username: "Vivek",
    text: "Good Product",
  },
];

app.get("/", (req, res) => {
  res.send("connected");
});
// get the form for new comment
app.get("/comments/new", (req, res) => {
  res.render("new");
});
// list all the comments
app.get("/comments", (req, res) => {
  res.render("index", { comments });
});

// displaying particular comment
app.get("/comments/:commentid", (req, res) => {
  console.log(req.params);
  const { commentid } = req.params;
  const foundComment = comments.find((comment) => comment.id === commentid);
  console.log(foundComment);
  res.render("show", { comment: foundComment });
});

app.get("/comments/:commentid/edit", (req, res) => {
  const { commentid } = req.params;

  const foundComment = comments.find((comment) => comment.id === commentid);

  res.render("edit", { comment: foundComment });
});

// creating a new comment
app.post("/comments", (req, res) => {
  const { username, text } = req.body;
  comments.push({ username, text, id: uuid() });
  res.redirect("/comments");
});

app.listen(3000, () => {
  console.log("server listining at port 3000");
});
