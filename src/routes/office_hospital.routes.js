const {Router} = require('express');

module.exports = function ({OfficeHospitalController}) {
    const router = new Router();

    router.get('/index', OfficeHospitalController.index);

    //getters
    router.get('', OfficeHospitalController.getAll);
    router.get('/:idOfficeHospital', OfficeHospitalController.get);

    //posts
    router.post('/', OfficeHospitalController.create);

    //putters
    router.put('/:idOfficeHospital', OfficeHospitalController.update);

    //deletes
    router.delete('/:idOfficeHospital', OfficeHospitalController.delete);

    return router;
}