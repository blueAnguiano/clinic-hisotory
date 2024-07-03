let _personalService = null;

class PersonalController {
    constructor({PersonalService}) {
        _personalService = PersonalService;
    }

    index(req, res) {
        res.send(_personalService.index());
    }

    async get(req, res) {
        const {idPersonal} = req.params;
        const personal = await _personalService.get(idPersonal);
        return res.send(personal);
    }

    async getAll(req, res) {
        const personals = await _personalService.getAll();
        return res.send(personals);
    }

    async getByProfessionalId(req, res) {
        const {idProfessional} = req.params;
        const personal = await _personalService.getByProfessionalId(idProfessional);
        return res.send(personal);
    }

    async getByName(req, res) {
        const {name} = req.params;
        const personal = await _personalService.getByName(name);
        return res.send(personal);
    }

    async getByState(req, res) {
        const {state} = req.params;
        const personal = await _personalService.getByState(state);
        return res.send(personal);
    }

    async create(req, res) {
        const {body} = req;
        const personal = await _personalService.create(body);
        return res.status(201).send(personal);
    }

    async update(req, res) {
        const {idSpecialty} = req.params;
        const {body} = req;

        const personal = await _personalService.update(idSpecialty, body);
        return res.send(personal);
    }

    async delete(req, res) {
        const {idSpecialty} = req.params;
        const deletedPersonal = await _personalService.delete(idSpecialty);
        return res.send(deletedPersonal);
    }
}

module.exports = PersonalController;