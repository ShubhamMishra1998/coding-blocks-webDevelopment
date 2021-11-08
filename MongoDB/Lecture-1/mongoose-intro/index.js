const mongoose = require("mongoose");

// connect with your movieApp database
mongoose
  .connect("mongodb://localhost:27017/movieApp")
  .then(() => {
    console.log("connection open");
  })
  .catch((err) => {
    console.log(err);
  });

// define schema
// maps the document comming from mongodb database into usable js object
const movieSchema = new mongoose.Schema({
  name: String,
  year: Number,
  rating: Number,
  isWatched: Boolean,
});

const Movie = mongoose.model("Movie", movieSchema);

const ironman = new Movie({
  name: "IronMan",
  year: 2010,
  rating: 8.9,
  isWatched: true,
});

// saving in database
// ironman
//   .save()
//   .then((m) => {
//     console.log(m);
//     console.log("saved succesfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const Dummy_Movies = [
//   {
//     name: "Superman",
//     year: 2012,
//     rating: 7.8,
//     isWatched: true,
//   },
//   {
//     name: "Starwars",
//     year: 2014,
//     rating: 8.7,
//     isWatched: false,
//   },
//   {
//     name: "Wondor Women",
//     year: 2017,
//     rating: 8.1,
//     isWatched: true,
//   },
//   {
//     name: "Martian",
//     year: 2011,
//     rating: 7.7,
//     isWatched: false,
//   },
//   {
//     name: "Mission Impossible",
//     year: 2008,
//     rating: 6.7,
//     isWatched: true,
//   },
// ];

// Movie.insertMany(Dummy_Movies)
//   .then((movies) => {
//     console.log(movies);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Movie.create({ name: "Endgame", year: 2010, rating: 9, isWatched: true }).then(
//   (m) => {
//     console.log(m);
//     console.log("Saved");
//   }
// );

// const movieSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     maxLength: 30,
//   },
//   year: {
//     type: Number,
//     min: [1995, "Year should not be less than 1995"],
//     max: 2021,
//   },
//   rating: {
//     type: Number,
//     min: 0,
//     max: 10,
//   },
//   isWatched: {
//     type: Boolean,
//     default: false,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });
