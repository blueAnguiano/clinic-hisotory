const {Router} = require('express');

module.exports = function ({PatientHospitalController}) {
    const router = new Router();

    router.get('/index', PatientHospitalController.index);

    //getters
    router.get('', PatientHospitalController.getAll);
    router.get('/:idPatientHospital', PatientHospitalController.get);

    //posts
    router.post('/', PatientHospitalController.create);

    //putters
    router.put('/:idPatientHospital', PatientHospitalController.update);

    //deletes
    router.delete('/:idPatientHospital', PatientHospitalController.delete);

    return router
}