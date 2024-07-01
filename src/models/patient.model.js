const mongoose = require('mongoose');
const {Schema} = mongoose;

const PatientSchema = new Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    momLastname: {type: String, required: true},
    age: {type: Number, required: true}, //todo: add birthday, and calculate the age
    address: {type: String, required: true},
    phone: {type: String, required: true},
    ssn: {type: String, required: true},
    clinic: {type: Schema.Types.ObjectId, required: true, autopopulate: true},
    room: {type: String, required: true},
    schedule: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, required: true, autopopulate: true},
    isVerified: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    createdBy: {type: Schema.Types.ObjectId, ref: 'Personal', required: true, autopopulate: true},
})

PatientSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Patient', PatientSchema);