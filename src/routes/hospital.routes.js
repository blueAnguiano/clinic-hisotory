const {Router} = require('express');

module.exports = function ({HospitalController}) {
    const router = new Router();

    router.get('/index', HospitalController.index);

    //getters
    router.get('', HospitalController.getAll);
    router.get('/:idHospital', HospitalController.get);

    //posts
    router.post('/', HospitalController.create);

    //putters
    router.put('/:idHospital', HospitalController.update);

    //deletes
    router.delete('/:idHospital', HospitalController.delete);

    return router;

}