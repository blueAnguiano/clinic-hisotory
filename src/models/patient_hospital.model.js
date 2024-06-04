const mongoose = require('mongoose');
const { Schema } = mongoose;

const PatientHospitalSchema = new Schema({
    hospital: {type: Schema.Types.ObjectId, ref: 'hospital', required: true, autopopulate: true},
    patient: {type: Schema.Types.ObjectId, ref: 'patient', required: true, autopopulate: true},
    admission: {type: Date, required: true},
    egress: {type: Date, required: true},
    room: {type: Number, required: true},
    level: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now, required: true},
    updateAt: {type: Date, default: Date.now, required: true},
    createdBy: {type: Schema.Types.ObjectId, ref: 'personal', required: true},
});

PatientHospitalSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('patient_hospital', PatientHospitalSchema);