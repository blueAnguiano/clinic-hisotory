let _specialtyService = null;

class SpecialtyController {
    constructor({SpecialtyService}) {
        _specialtyService = SpecialtyService;
    }

    index(req, res) {
        res.send(_specialtyService.index());
    }

    async get(req, res) {
        const {idSpecialty} = req.params;
        const specialty = await _specialtyService.get(idSpecialty);
        return res.send(specialty);
    }

    async getAll(req, res) {
        const specialties = await _specialtyService.getAll();
        return res.send(specialties);
    }

    async create(req, res) {
        const {body} = req;
        const specialty = await _specialtyService.create(body);
        return res.status(201).send(specialty);
    }

    async update(req, res) {
        const {idSpecialty} = req.params;
        const {body} = req;

        const specialty = await _specialtyService.update(idSpecialty, body);
        return res.send(specialty);
    }

    async delete(req, res) {
        const {idSpecialty} = req.params;
        const deletedSpecialty = await _specialtyService.delete(idSpecialty);
        return res.send(deletedSpecialty);
    }
}

module.exports = SpecialtyController;