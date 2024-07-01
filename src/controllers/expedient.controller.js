let _expedientService = null;
class ExpedientController {
    constructor({ExpedientService}) {
        _expedientService = ExpedientService;
    }

    index(req, res) {
        res.send(_expedientService.index());
    }

    async get(req, res) {
        const {idExpedient} = req.params
        const expedient = await _expedientService.get(idExpedient);
        return res.send(expedient);
    }

    async getAll(req, res) {
        const expedients = await _expedientService.getAll();
        return res.send(expedients);
    }


    async create(req, res) {
        const {body} = req;
        const expedient = await _expedientService.create(body);
        return res.status(201).send(expedient);
    }

    async update(req, res) {
        const {idExpedient} = req.params;
        const {body} = req;

        const expedient = await _expedientService.update(idExpedient, body);
        return res.send(expedient);
    }

    async delete(req, res) {
        const {idExpedient} = req.params;
        const deletedExpedient = await _expedientService.delete(idExpedient);
        return res.send(deletedExpedient);
    }

}

module.exports = ExpedientController;