const mongoose = require("mongoose");

const newCarSchema = new mongoose.Schema({
  carInfo: String,
  year: Number,
  enginetype: String,
  transmission: String,
  color: String,
  price: Number,
  description: String,
  image: String,
});
const NewCar = mongoose.model("NewCar", newCarSchema);
module.exports = NewCar;
