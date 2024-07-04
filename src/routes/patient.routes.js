const {Router} = require('express');

module.exports = function ({PatientController}) {
    const router = new Router();

    router.get('/index', PatientController.index);

    //getters
    router.get('', PatientController.getAll);
    router.get('/:idPatient', PatientController.get);
    router.get('/search/by-security/:ssn', PatientController.getBySNN);
    router.get('/search/by-name/:name', PatientController.getByName);
    router.get('/search/by-clinic/:idClinic', PatientController.getByClinic);
    router.get('/search/by-hospital/:state', PatientController.getByHospital);

    //posts
    router.post('/', PatientController.create);

    //putters
    router.put('/:idPatient', PatientController.update);

    //deletes
    router.delete('/:idPatient', PatientController.delete);

    return router;
}