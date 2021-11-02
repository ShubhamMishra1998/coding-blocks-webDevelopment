const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/moviesDB")
  .then(() => {
    console.log("connection open");
  })
  .catch((err) => {
    console.log("something went wrong");
    console.log(err);
  });
