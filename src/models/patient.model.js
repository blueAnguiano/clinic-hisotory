const mongoose = require('mongoose');
const {Schema} = mongoose;

const PatientSchema = new Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    lastnameMom: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    ssn: {type: String, required: true},
    roomConsulting: {type: Number, required: true},
    schedule: {type: String, required: true},
    address: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    age: {type: Number, required: true},
    isVerified: {type: Boolean, default: false},
    clinic: {
        type: Schema.Types.ObjectId,
        ref: 'clinic',
        required: true,
        autopopulate: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'personal',
        required: true,
        autopopulate: true
    },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

PatientSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('patient', PatientSchema);