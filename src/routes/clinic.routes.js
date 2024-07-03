const {Router} = require('express');

module.exports = function ({ClinicController}) {
    const router = new Router();

    router.get('/index', ClinicController.index);

    //getters
    router.get('', ClinicController.getAll);
    router.get('/:idClinic', ClinicController.get);
    router.get('/search/by-name/:name', ClinicController.getByName);
    router.get('/search/by-state/:state', ClinicController.getByState);

    //posts
    router.post('/', ClinicController.create);

    //putters
    router.put('/:idClinic', ClinicController.update);

    //deletes
    router.delete('/:idClinic', ClinicController.delete);

    return router;
}