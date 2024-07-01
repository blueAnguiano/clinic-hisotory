const mongoose = require('mongoose');
const {Schema} = mongoose;

const HospitalSchema = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: String, required: true},
});

module.exports = mongoose.model('hospital', HospitalSchema);