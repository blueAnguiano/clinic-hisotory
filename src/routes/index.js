const express = require("express");

//Middlewares
const cors = require("cors");
const helmet = require('helmet');
const compression = require('compression');

module.exports = function ({HomeRoutes}) {
    const router = express.Router();
    const api = express.Router();

    api
        .use(express.json)
        .use(cors());

    api.use('/home', HomeRoutes);


    router.use('/v1/api', api);

    return router;
}