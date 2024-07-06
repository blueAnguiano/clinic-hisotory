const {Router} = require('express');

module.exports = function ({AuthController}) {
    const router = new Router();

    router.get('/sign-in', AuthController.login);

    router.post('/sing-up', AuthController.signUp);

    return router;
}