const {Router} = require('express');

module.exports = function ({PersonalController}) {
    const router = new Router();

    router.get('/index', PersonalController.index);

    //getters
    router.get('', PersonalController.getAll);
    router.get('/:idPersonal', PersonalController.get);

    //posts
    router.post('/', PersonalController.create);

    //putters
    router.put('/:idPersonal', PersonalController.update);

    //deletes
    router.delete('/:idPersonal', PersonalController.delete);

    return router;
}