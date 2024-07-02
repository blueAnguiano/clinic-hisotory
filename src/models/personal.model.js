const mongoose = require('mongoose');
const {Schema} = mongoose;

const PersonalSchema = new Schema({
    professionalId: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    momLastname: {type: String, required: true},
    age: {type: Number},
    birth: {type: Date, required: true},
    address: {type: String, required: true},
    state: {type: String, required: true},
    municipal: {type: String, required: true},
    phone: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    createdBy: {type: Schema.Types.ObjectId, ref: 'Personal', required: true, autopopulate: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true, autopopulate: true},
    type: {type: Schema.Types.ObjectId, ref: 'PersonalType', required: true, autopopulate: true},
    specialty: {type: Schema.Types.ObjectId, ref: 'Specialty', required: true, autopopulate: true},
});

PersonalSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Personal', PersonalSchema);