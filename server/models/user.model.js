const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    address: String,
    phone: Number,
    profileImg: String,
    posts: Number,
    cars: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car"
    }]
  });

  const User = mongoose.model("User", userSchema);
  module.exports = User;