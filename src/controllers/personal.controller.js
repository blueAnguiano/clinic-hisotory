let _personalService = null;

class PersonalController {
    constructor({PersonalService}) {
        _personalService = PersonalService;
    }

    async get(req, res) {
        const {idPersonal} = req.params;
        const personal = await _personalService.get(idPersonal);
        return res.send(personal);
    }

    async getAll(req, res) {
        const personal = await _personalService.getAll();
        return res.send(personal);
    }

    async getByName(req, res) {
        const {name} = req.params;
        const personal = await _personalService.getPersonalByName(name);
        return res.send(personal);
    }

    async getByLastname(req, res) {
        const {lastname} = req.params;
        const personal = await _personalService.getPersonalByLastname(lastname);
        return res.send(personal);
    }

    async getByProfessionalId(req, res) {
        const {idProfessional} = req.params;
        const personal = await _personalService.getPersonalByProfessionalId(idProfessional);
        return res.send(personal);
    }

    /*async create(req, res) {}*/

    async update(req, res) {
        const {body} = req;
        const {idPersonal} = req.params;
        const personal = await _personalService.update(idPersonal, body);
        return res.send(personal);
    }

    async delete(req, res) {
        const {idPersonal} = req.params;
        const deletedPersonal = await _personalService.delete(idPersonal);
        return res.send(deletedPersonal);
    }

}

module.exports = PersonalController;