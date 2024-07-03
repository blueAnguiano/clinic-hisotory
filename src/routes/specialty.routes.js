const {Router} = require('express');

module.exports = function ({SpecialtyController}) {
    const router = new Router();

    router.get('/index', SpecialtyController.index);

    //getters
    router.get('', SpecialtyController.getAll);
    router.get('/:idSpecialty', SpecialtyController.get);

    //posts
    router.post('/', SpecialtyController.create);

    //putters
    router.put('/:idSpecialty', SpecialtyController.update);

    //deletes
    router.delete('/:idSpecialty', SpecialtyController.delete);

    return router;
}