if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

module.exports = {
    PORT: process.env.PORT || 5000,
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET
};