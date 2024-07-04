const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const UserSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    role: {
        type: String,
        enum: ['personal', 'patient'],
        required: true
    },
    createdAt: { type: Date, default: Date.now }
});

UserSchema.methods.toJSON = function () {
    let user = this.toObject();
    delete user.password;
    return user;
}

module.exports = mongoose.model('User', UserSchema);