let _clinicHistoryService = null;

class ClinicHistoryController {
    constructor({ClinicHistoryService}) {
        _clinicHistoryService = ClinicHistoryService;
    }

    index(req, res) {
        res.send(_clinicHistoryService.index());
    }

    async get(req, res) {
        const {idClinicHistory} = req.params
        const clinicHistory = await _clinicHistoryService.get(idClinicHistory);
        return res.send(clinicHistory);
    }

    async getAll(req, res) {
        const clinicHistories = await _clinicHistoryService.getAll();
        return res.send(clinicHistories);
    }

    async create(req, res) {
        const {body} = req;
        const clinicHistory = await _clinicHistoryService.create(body);
        return res.status(201).send(clinicHistory);
    }

    async update(req, res) {
        const {idClinicHistory} = req.params;
        const {body} = req;

        const clinicHistory = await _clinicHistoryService.update(idClinicHistory, body);
        return res.send(clinicHistory);
    }

    async delete(req, res) {
        const {idClinicHistory} = req.params;
        const deletedClinicHistory = await _clinicHistoryService.delete(idClinicHistory);
        return res.send(deletedClinicHistory);
    }

}

module.exports = ClinicHistoryController;