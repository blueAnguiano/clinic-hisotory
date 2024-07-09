let _personalService = null;

class PersonalController {
    constructor({PersonalService}) {
        _personalService = PersonalService;
    }

    index(req, res) {
        res.send(_personalService.index());
    }

    async get(req, res, next) {
        try {
            const {idPersonal} = req.params;
            const personal = await _personalService.get(idPersonal);
            return res.send(personal);
        } catch (error) {
            return next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const personals = await _personalService.getAll();
            return res.send(personals);
        } catch (error) {
            return next(error);
        }
    }

    async getByProfessionalId(req, res, next) {
        try {
            const {idProfessional} = req.params;
            const personal = await _personalService.getByProfessionalId(idProfessional);
            return res.send(personal);
        } catch (error) {
            return next(error);
        }
    }

    async getByName(req, res, next) {
        try {
            const {name} = req.params;
            const personal = await _personalService.getByName(name);
            return res.send(personal);
        } catch (error) {
            return next(error);
        }
    }

    async getByState(req, res, next) {
        try {
            const {state} = req.params;
            const personal = await _personalService.getByState(state);
            return res.send(personal);
        } catch (error) {
            return next(error);
        }
    }

    async getByClinic(req, res, next) {
        try {
            const {idClinic} = req.params;
            const personal = await _personalService.getByClinic(idClinic);
            return res.send(personal);
        } catch (error) {
            return next(error);
        }
    }

    async getByHospital(req, res, next) {
        try {
            const {idHospital} = req.params;
            const personal = await _personalService.getByHospital(idHospital);
            return res.send(personal);
        } catch (error) {
            return next(error);
        }
    }

    async create(req, res, next) {
        try {
            const {body} = req;
            const personal = await _personalService.create(body);
            return res.status(201).send(personal);
        } catch (error) {
            return next(error);
        }
    }

    async update(req, res, next) {
        try {
            const {idPersonal} = req.params;
            const {body} = req;

            const personal = await _personalService.update(idPersonal, body);
            return res.send(personal);
        } catch (error) {
            return next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const {idPersonal} = req.params;
            const deletedPersonal = await _personalService.delete(idPersonal);
            return res.send(deletedPersonal);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = PersonalController;