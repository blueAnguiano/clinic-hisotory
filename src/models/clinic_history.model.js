const mongoose = require('mongoose');
const {Schema} = mongoose;

const ClinicHistorySchema = new Schema({
    expedient: {type: Schema.Types.ObjectId, ref: 'expedient'},
    createdBy: {type: Schema.Types.ObjectId, ref: 'personal'},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    iteration: {type: Number, required: true},
    ethnicGroup: {type: String, required: true},
    familyHeirs: {type: Object, required: true},
    pathologicalHistory: {type: Object, required: true},
    nonPathologicalHistory: {type: Object, required: true}
});

ClinicHistorySchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('clinic_history', ClinicHistorySchema);