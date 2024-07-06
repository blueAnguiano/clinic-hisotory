const mongoose = require('mongoose');
const {Schema} = mongoose;

const ExpedientSchema = new Schema({
    patient: {type: Schema.Types.ObjectId, ref: 'Patient', required: true, autopopulate: true},
    createdBy: {type: Schema.Types.ObjectId, ref: 'User', autopopulate: true, required: true},
    parent: { type: Schema.Types.ObjectId, ref: 'Expedient', autopopulate: true },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    updatedBy: {type: Schema.Types.ObjectId, ref: 'User', autopopulate: true}
});

ExpedientSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Expedient', ExpedientSchema);