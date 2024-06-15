const {Router} = require('express');

module.exports = ({ClinicController}) => {
    const router = new Router();

    router.get('/', ClinicController.index);

    //getters
    router.get('', ClinicController.getAll);
    router.get('/:idClinic', ClinicController.get);
    router.get('/:name', ClinicController.getByName);

    //posts

    //putters
    router.put('/:idClinic', ClinicController.update);

    //deletes
    router.delete('/:idClinic', ClinicController.delete);

    return router;
};