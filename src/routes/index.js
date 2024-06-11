const express = require("express");

//Middlewares
const cors = require("cors");
const helmet = require('helmet');
const compression = require('compression');

module.exports = function ({HomeRoutes, PatientRoutes}) {
    const router = express.Router();
    const api = express.Router();

    api
        .use(express.json)
        .use(cors());

    api.use('/home', HomeRoutes);
    api.use('/patient', PatientRoutes);


    router.use('/v1/api', api);

    return router;
}