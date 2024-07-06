const {JWT_SECRET} = require('../config');

const jwt = require('jsonwebtoken');

module.exports.generateToken = (user) => {
    let expiration = user.role === "patient" ? '4h' : '30m';
    return jwt.sign(user, JWT_SECRET, { expiresIn: expiration });
}