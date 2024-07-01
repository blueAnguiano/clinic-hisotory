const {Router} = require('express');

module.exports = function ({UserController}) {
    const router = new Router();

    router.get('/index', UserController.index);

    //getters
    router.get('', UserController.getAll);
    router.get('/:idUser', UserController.get);

    router.get('/search/:username', UserController.getByUsername);
    router.get('/search/:email', UserController.getByEmail);
    router.get('/search/:role', UserController.getByRole);


    //posts
    router.post('/', UserController.create);

    //putters
    router.put('/:idUser', UserController.update);

    //deletes
    router.delete('/:idUser', UserController.delete);

    return router;
}
