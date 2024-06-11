const {Router} = require('express');
const UserController = require("express/lib/router");

//Middlewares

module.exports = ({PatientController}) => {
    const router = new Router();

    //getters
    router.get('', PatientController.getAll)
    router.get('/:idPatient', PatientController.get);

    router.post('/:name', PatientController.getByName);
    router.get('/:lastname', PatientController.getByLastname);
    router.get('/:ssn', PatientController.getBySSN);

    //posts

    //putters
    router.post('/:idPatient', PatientController.update);

    //deletes
    router.put('/:idPatient', PatientController.delete);

    return router;
}