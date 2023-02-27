const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
    email: String,
    status: String,
    comment:String
})
const Feed = mongoose.model("Feed", feedSchema)
module.exports = Feed