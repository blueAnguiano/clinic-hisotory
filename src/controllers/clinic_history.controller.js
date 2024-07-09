let _clinicHistoryService = null;

class ClinicHistoryController {
    constructor({ClinicHistoryService}) {
        _clinicHistoryService = ClinicHistoryService;
    }

    index(req, res) {
        res.send(_clinicHistoryService.index());
    }

    async get(req, res, next) {
        try {
            const {idClinicHistory} = req.params
            const clinicHistory = await _clinicHistoryService.get(idClinicHistory);
            return res.send(clinicHistory);
        } catch (error) {
            return next(error)
        }
    }

    async getAll(req, res, next) {
        try {
            const clinicHistories = await _clinicHistoryService.getAll();
            return res.send(clinicHistories);
        } catch (error) {
            return next(error)
        }
    }

    async create(req, res, next) {
        try {
            const {body} = req;
            const clinicHistory = await _clinicHistoryService.create(body);
            return res.status(201).send(clinicHistory);
        } catch (error) {
            return next(error)
        }
    }

    async update(req, res, next) {
        try {
            const {idClinicHistory} = req.params;
            const {body} = req;

            const clinicHistory = await _clinicHistoryService.update(idClinicHistory, body);
            return res.send(clinicHistory);
        } catch (error) {
            return next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const {idClinicHistory} = req.params;
            const deletedClinicHistory = await _clinicHistoryService.delete(idClinicHistory);
            return res.send(deletedClinicHistory);
        } catch (error) {
            return next(error);
        }
    }

}

module.exports = ClinicHistoryController;