const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const OfficeHospitalSchema = new Schema({
    hospital: {type: Schema.Types.ObjectId, ref: 'hospital', required: true, autopopulate: true},
    personal: {type: Schema.Types.ObjectId, ref: 'personal', required: true, autopopulate: true},
    room: {type: Number, required: true},
    level: {type: Number, required: true},
    scheduleTime: {type: String, required: true},
    scheduleDays: {type: String, required: true},
});

OfficeHospitalSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('office_hospital', OfficeHospitalSchema);