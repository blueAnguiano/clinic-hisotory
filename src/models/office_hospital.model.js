const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const OfficeHospitalSchema = new Schema({
    personal: {type: Schema.Types.ObjectId, ref: 'Personal', required: true, autopopulate: true},
    hospital: {type: Schema.Types.ObjectId, ref: 'Hospital', required: true, autopopulate: true},
    room: {type: String, required: true},
    scheduledStart: {type: String, required: true},
    scheduledEnd: {type: String, required: true},
    startTime: {type: String, required: true},
    endTime: {type: String},
});

OfficeHospitalSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('OfficeHospital', OfficeHospitalSchema);