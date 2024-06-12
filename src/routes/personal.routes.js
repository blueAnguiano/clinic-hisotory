const { Router } = require('express');

module.exports = ({PersonalController}) => {
    const router = new Router();

    //getters
    router.get('', PersonalController.getAll);
    router.get('/:idPersonal', PersonalController.get);
    router.get('/:name', PersonalController.getByName);
    router.get('/:lastname', PersonalController.getByLastname);
    router.get('/:idProfessionalId', PersonalController.getByProfessionalId);

    //posts

    //putters
    router.put('/:idPersonal', PersonalController.update);

    //deletes
    router.delete('/:idPersonal', PersonalController.delete);


    return router;
}