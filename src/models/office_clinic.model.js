const mongoose = require('mongoose');

const {Schema} = mongoose;

const OfficeClinicSchema = new Schema({
    clinic: {type: Schema.Types.ObjectId, ref: 'clinic', required: true, autopopulate: true},
    personal: {type: Schema.Types.ObjectId, ref: 'personal', required: true, autopopulate: true},
    room: {type: Number, required: true},
    level: {type: Number, required: true},
    scheduleTime: {type: String, required: true},
    scheduleDays: {type: String, required: true},
});

OfficeClinicSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('OfficeClinic', OfficeClinicSchema);