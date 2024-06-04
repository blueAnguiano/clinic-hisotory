const mongoose = require('mongoose');
const {Schema} = mongoose;

const PersonalTypeSchema = new Schema({
    name: {type: String, required: true}
});

module.exports = mongoose.model('personal_type', PersonalTypeSchema);