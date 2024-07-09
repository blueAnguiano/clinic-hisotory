let _personalTypeService = null;

class PersonalTypeController {
    constructor({PersonalTypeService}) {
        _personalTypeService = PersonalTypeService;
    }

    index(req, res) {
        res.send(_personalTypeService.index());
    }

    async get(req, res, next) {
        try {
            const {idPersonalType} = req.params;
            const personalType = await _personalTypeService.get(idPersonalType);
            return res.send(personalType);
        } catch (error) {
            return next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const personalTypes = await _personalTypeService.getAll();
            return res.send(personalTypes);
        } catch (error) {
            return next(error);
        }
    }

    async create(req, res, next) {
        try {
            const {body} = req;
            const personalType = await _personalTypeService.create(body);
            return res.status(201).send(personalType);
        } catch (error) {
            return next(error);
        }
    }

    async update(req, res, next) {
        try {
            const {idPersonalType} = req.params;
            const {body} = req;

            const personalType = await _personalTypeService.update(idPersonalType, body);
            return res.send(personalType);
        } catch (error) {
            return next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const {idPersonalType} = req.params;
            const deletedPersonalType = await _personalTypeService.delete(idPersonalType);
            return res.send(deletedPersonalType);
        } catch (error) {
            return next(error);
        }
    }

}

module.exports = PersonalTypeController;