const container = require('./src/startup/container');
const server = container.resolve('app');
const {MONGODB_URI} = container.resolve('config');

const mongoose = require('mongoose');

mongoose.connect(MONGODB_URI, {})
    .then(() => server.start())
    .catch((error) => console.log(error));