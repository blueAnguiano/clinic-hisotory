const {Router} = require('express');

module.exports = function ({ClinicHistoryController}) {
    const router = new Router();

    router.get('/index', ClinicHistoryController.index);

    //getters
    router.get('', ClinicHistoryController.getAll);
    router.get('/:idClinicHistory', ClinicHistoryController.get);

    //posts
    router.post('/', ClinicHistoryController.create);

    //putters
    router.put('/:idClinicHistory', ClinicHistoryController.update);

    //deletes
    router.delete('/:idClinicHistory', ClinicHistoryController.delete);

    return router;
};