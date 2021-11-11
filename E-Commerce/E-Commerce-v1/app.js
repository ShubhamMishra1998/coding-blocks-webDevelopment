const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
// setting up database
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopping-app")
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const productRoutes = require("./routes/product");

app.use(productRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
