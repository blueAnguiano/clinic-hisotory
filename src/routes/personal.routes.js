const {Router} = require('express');

module.exports = function ({PersonalController}) {
    const router = new Router();

    router.get('/index', PersonalController.index);

    //getters
    router.get('', PersonalController.getAll);
    router.get('/:idPersonal', PersonalController.get);
    router.get('/search/by-professional/:idProfessional', PersonalController.getByProfessionalId);
    router.get('/search/by-name/:name', PersonalController.getByName);
    router.get('/search/by-state/:state', PersonalController.getByState);

    //posts
    router.post('/', PersonalController.create);

    //putters
    router.put('/:idPersonal', PersonalController.update);

    //deletes
    router.delete('/:idPersonal', PersonalController.delete);

    return router;
}