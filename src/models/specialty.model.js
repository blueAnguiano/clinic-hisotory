const mongoose = require("mongoose");
const {Schema} = mongoose;

const SpecialtySchema = new Schema({
    name: {type: String, required: true}
})

module.exports = mongoose.model('specialty', SpecialtySchema);