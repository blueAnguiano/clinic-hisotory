const {Router} = require('express');

module.exports = function ({ClinicHistoryController}) {
    const router = new Router();

    router.get('/index', ClinicHistoryController.index);

    //getters
    router.get('', ClinicHistoryController.getAll);
    router.get('/:idClinic', ClinicHistoryController.get);

    //posts
    router.post('/', ClinicHistoryController.create);

    //putters
    router.put('/:idClinic', ClinicHistoryController.update);

    //deletes
    router.delete('/:idClinic', ClinicHistoryController.delete);

    return router;
};