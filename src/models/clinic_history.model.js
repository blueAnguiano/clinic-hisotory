const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClinicHistorySchema = new Schema({
    expedient: {type: Schema.Types.ObjectId, ref: 'Expedient', required: true, autopopulate: true},
    createdBy: {type: Schema.Types.ObjectId, ref: 'User', autopopulate: true, required: true},
    updatedBy: {type: Schema.Types.ObjectId, ref: 'User', autopopulate: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    iteration: {type: Number, required: true},
    ethnicGroup: {type: String, required: true},
    familyHeirs: {type: Object, required: true},
    pathologicalHistory: {type: Object, required: true},
    nonPathologicalHistory: {type: Object, required: true}
})

ClinicHistorySchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('ClinicHistory', ClinicHistorySchema);