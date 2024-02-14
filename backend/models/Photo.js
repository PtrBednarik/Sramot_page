const mongoose = require("mongoose")
const PhotoSchema = new  mongoose.Schema({
    title: String,
    filepath: String,
    year: String
})

module.exports = mongoose.model('photo', PhotoSchema)
