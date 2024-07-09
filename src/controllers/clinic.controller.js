let _clinicService = null

class ClinicController {
    constructor({ClinicService}) {
        _clinicService = ClinicService;
    }

    index(req, res) {
        res.send(_clinicService.index());
    }

    async get(req, res, next) {
        try {
            const {idClinic} = req.params
            const clinic = await _clinicService.get(idClinic);
            return res.send(clinic);
        } catch (error) {
            return next(error)
        }
    }

    async getAll(req, res, next) {
        try {
            const clinics = await _clinicService.getAll();
            return res.send(clinics);
        } catch (error) {
            return next(error)
        }
    }

    async getByName(req, res, next) {
        try {
            const {name} = req.params;
            const clinic = await _clinicService.getByName(name);
            return res.send(clinic);
        } catch (error) {
            return next(error)
        }
    }

    async getByState(req, res, next) {
        try {
            const {state} = req.params;
            const clinic = await _clinicService.getByState(state);
            return res.send(clinic);
        } catch (error) {
            return next(error)
        }
    }

    async create(req, res, next) {
        try {
            const {body} = req;
            const clinic = await _clinicService.create(body);
            return res.status(201).send(clinic);
        } catch (error) {
            return next(error)
        }
    }

    async update(req, res, next) {
        try {
            const {idClinic} = req.params;
            const {body} = req;
            const clinic = await _clinicService.update(idClinic, body);
            return res.send(clinic);
        } catch (error) {
            return next(error)
        }
    }

    async delete(req, res, next) {
        try {
            const {idClinic} = req.params;
            const deletedClinic = await _clinicService.delete(idClinic);
            return res.send(deletedClinic);
        } catch (error) {
            return next(error)
        }
    }

}

module.exports = ClinicController;