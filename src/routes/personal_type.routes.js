const {Router} = require('express');

module.exports = function ({PersonalTypeController}) {
    const router = new Router();

    router.get('/index', PersonalTypeController.index);

    //getters
    router.get('', PersonalTypeController.getAll);
    router.get('/:idPersonalType', PersonalTypeController.get);

    //posts
    router.post('/', PersonalTypeController.create);

    //putters
    router.put('/:idPersonalType', PersonalTypeController.update);

    //deletes
    router.delete('/:idPersonalType', PersonalTypeController.delete);

    return router;
}