const {Router} = require('express');

module.exports = function ({OfficeClinicController}) {
    const router = new Router();

    router.get('/index', OfficeClinicController.index);

    //getters
    router.get('', OfficeClinicController.getAll);
    router.get('/:idOfficeClinic', OfficeClinicController.get);

    //posts
    router.post('/', OfficeClinicController.create);

    //putters
    router.put('/:idOfficeClinic', OfficeClinicController.update);

    //deletes
    router.delete('/:idOfficeClinic', OfficeClinicController.delete);

    return router;
}