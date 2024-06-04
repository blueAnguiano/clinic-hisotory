const mongoose = require('mongoose');
const {Schema} = mongoose;

const ExpedientSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'patient',
        required: true,
        autopopulate: true
    },
    createdBY: {
        type: Schema.Types.ObjectId,
        ref: 'personal',
        required: true,
        autopopulate: true
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: 'expedient',
        required: true,
        autopopulate: true
    },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

ExpedientSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('expedient', ExpedientSchema);