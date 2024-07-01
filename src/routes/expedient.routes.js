const {Router} = require('express');

module.exports = function ({ExpedientController}) {
    const router = new Router();

    router.get('/index', ExpedientController.index);

    //getters
    router.get('', ExpedientController.getAll);
    router.get('/:idExpedient', ExpedientController.get);

    //posts
    router.post('/', ExpedientController.create);

    //putters
    router.put('/:idExpedient', ExpedientController.update);

    //deletes
    router.delete('/:idExpedient', ExpedientController.delete);

    return router;
}