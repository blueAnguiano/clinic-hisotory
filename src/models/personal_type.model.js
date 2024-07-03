const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const PersonalTypeSchema = new Schema({
    name: { type: String, required: true },
});

module.exports = mongoose.model('PersonalType', PersonalTypeSchema);