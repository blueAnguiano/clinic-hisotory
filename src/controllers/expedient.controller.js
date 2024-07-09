let _expedientService = null;
class ExpedientController {
    constructor({ExpedientService}) {
        _expedientService = ExpedientService;
    }

    index(req, res) {
        res.send(_expedientService.index());
    }

    async get(req, res, next) {
        try {
            const {idExpedient} = req.params
            const expedient = await _expedientService.get(idExpedient);
            return res.send(expedient);
        } catch (error) {
            return next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const expedients = await _expedientService.getAll();
            return res.send(expedients);
        } catch (error) {
            return next(error);
        }
    }

    async create(req, res, next) {
        try {
            const {body} = req;
            const expedient = await _expedientService.create(body);
            return res.status(201).send(expedient);
        } catch (error) {
            return next(error);
        }
    }

    async update(req, res, next) {
        try {
            const {idExpedient} = req.params;
            const {body} = req;

            const expedient = await _expedientService.update(idExpedient, body);
            return res.send(expedient);
        } catch (error) {
            return next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const {idExpedient} = req.params;
            const deletedExpedient = await _expedientService.delete(idExpedient);
            return res.send(deletedExpedient);
        } catch (error) {
            return next(error);
        }
    }

}

module.exports = ExpedientController;