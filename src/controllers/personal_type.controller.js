let _personalTypeService = null;

class PersonalTypeController {
    constructor({PersonalTypeService}) {
        _personalTypeService = PersonalTypeService;
    }

    index(req, res) {
        res.send(_personalTypeService.index());
    }

    async get(req, res) {
        const {idPersonalType} = req.params;
        const personalType = await _personalTypeService.get(idPersonalType);
        return res.send(personalType);
    }

    async getAll(req, res) {
        const personalTypes = await _personalTypeService.getAll();
        return res.send(personalTypes);
    }

    async create(req, res) {
        console.log(`Here`);
        const {body} = req;
        const personalType = await _personalTypeService.create(body);
        return res.status(201).send(personalType);
    }

    async update(req, res) {
        const {idPersonalType} = req.params;
        const {body} = req;

        const personalType = await _personalTypeService.update(idPersonalType, body);
        return res.send(personalType);
    }

    async delete(req, res) {
        const {idPersonalType} = req.params;
        const deletedPersonalType = await _personalTypeService.delete(idPersonalType);
        return res.send(deletedPersonalType);
    }

}

module.exports = PersonalTypeController;