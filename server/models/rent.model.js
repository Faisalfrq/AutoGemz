const mongoose = require("mongoose");

const rentSchema = new mongoose.Schema({
    pickup: String,
    info: String,
    engineType: String,
    color: String,
    transmission: String,
    rentPerDay: Number,
    description: String,
    image: String,
    contact: Number,
    secondContact: Number,
    status:String
});
const Rent = mongoose.model("Rent", rentSchema);
module.exports = Rent;
