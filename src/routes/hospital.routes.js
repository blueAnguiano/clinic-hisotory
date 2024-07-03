const {Router} = require('express');

module.exports = function ({HospitalController}) {
    const router = new Router();

    router.get('/index', HospitalController.index);

    //getters
    router.get('', HospitalController.getAll);
    router.get('/:idHospital', HospitalController.get);
    router.get('/search/by-name/:name', HospitalController.getByName);
    router.get('/search/by-state/:state', HospitalController.getByState);

    //posts
    router.post('/', HospitalController.create);

    //putters
    router.put('/:idHospital', HospitalController.update);

    //deletes
    router.delete('/:idHospital', HospitalController.delete);

    return router;

}