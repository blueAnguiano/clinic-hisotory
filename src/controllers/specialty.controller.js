let _specialtyService = null;

class SpecialtyController {
    constructor({SpecialtyService}) {
        _specialtyService = SpecialtyService;
    }

    index(req, res) {
        res.send(_specialtyService.index());
    }

    async get(req, res, next) {
        try {
            const {idSpecialty} = req.params;
            const specialty = await _specialtyService.get(idSpecialty);
            return res.send(specialty);
        } catch (error) {
            return next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const specialties = await _specialtyService.getAll();
            return res.send(specialties);
        } catch (error) {
            return next(error);
        }
    }

    async create(req, res, next) {
        try {
            const {body} = req;
            const specialty = await _specialtyService.create(body);
            return res.status(201).send(specialty);
        } catch (error) {
            return next(error);
        }
    }

    async update(req, res, next) {
        try {
            const {idSpecialty} = req.params;
            const {body} = req;

            const specialty = await _specialtyService.update(idSpecialty, body);
            return res.send(specialty);
        } catch (error) {
            return next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const {idSpecialty} = req.params;
            const deletedSpecialty = await _specialtyService.delete(idSpecialty);
            return res.send(deletedSpecialty);
        }catch(error) {
            return next(error);
        }
    }
}

module.exports = SpecialtyController;