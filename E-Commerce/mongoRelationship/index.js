const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/relationshipDB")
  .then(() => console.log("DB connected"));

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  addresses: [
    {
      _id: { id: false },
      lane: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
  const user = new User({ name: "Harry", age: 22 });
  await user.save();
  console.log("user created");
  console.log(user);
};

// makeUser();

async function addAddress(id) {
  const user = await User.findById(id);
  user.addresses.push({
    lane: "andheri",
    city: "Mumbai",
    state: "Maharastra",
    country: "India",
  });

  await user.save();
  console.log(user);
}

addAddress("618e72efee16082a8b5ecaa4");
