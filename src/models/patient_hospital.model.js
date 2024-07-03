const mongoose = require('mongoose');
const {Schema} = mongoose;

const PatientHospitalSchema = new Schema({
    hospital: {type: Schema.Types.ObjectId, ref: 'Hospital', required: true, autopopulate: true},
    patient: {type: Schema.Types.ObjectId, ref: 'Patient', required: true, autopopulate: true},
    admission: {type: Date, default: Date.now},
    egression: {type: Date},
    room: {type: String, required: true},
    level: {type: String, required: true},
    createdBy: {type: Schema.Types.ObjectId, ref: 'Personal', required: true, autopopulate: true},
    updatedBy: {type: Schema.Types.ObjectId, ref: 'Personal', required: true, autopopulate: true},
});

PatientHospitalSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('PatientHospital', PatientHospitalSchema);