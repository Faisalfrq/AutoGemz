const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  city: String,
  carInfo: String,
  register: String,
  year: Number,
  enginetype: String,
  transmission: String,
  color: String,
  mileage: Number,
  price: Number,
  description: String,
  image: String,
  contact: Number,
  secondContact: Number,
});
const Car = mongoose.model("Car", carSchema);
module.exports = Car;
