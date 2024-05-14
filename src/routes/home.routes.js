'use strict';

const {Router} = require('express');

module.exports = function ({HomeController}) {
    const router = new Router();

    router.get('/', HomeController.index);

    return router;
};
