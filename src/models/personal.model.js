const mongoose = require('mongoose');
const {Schema} = mongoose;

const PersonalSchema = new Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    lastnameMom: {type: String, required: true},
    age: {type: Number, required: true},
    address: {type: String, required: true},
    professionId: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    type: {type: Schema.Types.ObjectId, ref: 'personal_type', required: true, autopopulate: true},
    specialty: {type: Schema.Types.ObjectId, ref: 'specialty', required: true, autopopulate: true},
    createdAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
    createdBy: {type: Schema.Types.ObjectId, ref: 'personal', required: true},
});

PersonalSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.models('personal', PersonalSchema);