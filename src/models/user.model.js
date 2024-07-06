const mongoose = require('mongoose');
const {Schema} = mongoose;
const {compareSync, hashSync, genSaltSync} = require('bcryptjs');

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
        enum: ['personal', 'patient', 'sys admin', 'admin'],
        required: true
    },
    createdAt: { type: Date, default: Date.now },
    createdBy: {type: Schema.Types.ObjectId, ref: 'User', autopopulate: true},
    updatedBy: {type: Schema.Types.ObjectId, ref: 'User', autopopulate: true}
});

UserSchema.methods.toJSON = function () {
    let user = this.toObject();
    delete user.password;
    return user;
}

UserSchema.methods.comparePass = function (password) {
    return compareSync(password, this.password);
}

UserSchema.pre('save', function (next) {
    const user = this;

    if(!user.isModified('password')) {
        return next();
    }

    const salt = genSaltSync(10);
    user.password  = hashSync(user.password, salt);
    next();

});

module.exports = mongoose.model('User', UserSchema);