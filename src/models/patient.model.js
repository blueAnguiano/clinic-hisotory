const mongoose = require('mongoose');
const {Schema} = mongoose;

const {DateHelper} = require('../helpers');
const {calculateAge} = DateHelper;

const PatientSchema = new Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    momLastname: {type: String, required: true},
    birth: {type: Date, required: true},
    age: {type: Number},
    address: {type: String, required: true},
    state: {type: String, required: true},
    municipal: {type: String, required: true},
    phone: {type: String, required: true},
    ssn: {type: String, required: true},
    clinic: {type: Schema.Types.ObjectId, ref: 'clinic', required: true, autopopulate: true},
    room: {type: String, required: true},
    schedule: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', autopopulate: true},
    isVerified: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    createdBy: {type: Schema.Types.ObjectId, ref: 'User', autopopulate: true, required: true},
    updatedBy: {type: Schema.Types.ObjectId, ref: 'User', autopopulate: true}
})

PatientSchema.pre('save', function (next) {
    const patient = this;

    if(!patient.isModified('birth')) {
        return next();
    }

    patient.age = calculateAge(patient.birth)
    next();
})

PatientSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Patient', PatientSchema);