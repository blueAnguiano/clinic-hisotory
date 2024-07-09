let _hospitalService = null;

class HospitalController {
    constructor({HospitalService}) {
        _hospitalService = HospitalService;
    }

    index(req, res) {
        res.send(_hospitalService.index());
    }

    async get(req, res, next) {
        try {
            const {idHospital} = req.params;
            const hospital = await _hospitalService.get(idHospital);
            return res.send(hospital);
        } catch (error) {
            return next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const hospitals = await _hospitalService.getAll();
            return res.send(hospitals);
        } catch (error) {
            return next(error);
        }
    }

    async getByName(req, res, next) {
        try {
            const {name} = req.params;
            const hospital = await _hospitalService.getByName(name);
            return res.send(hospital);
        } catch (error) {
            return next(error);
        }
    }

    async getByState(req, res, next) {
        try {
            const {state} = req.params;
            const hospital = await _hospitalService.getByState(state);
            return res.send(hospital);
        } catch (error) {
            return next(error);
        }
    }

    async create(req, res, next) {
        try {
            const {body} = req;
            const hospital = await _hospitalService.create(body);
            return res.status(201).send(hospital);
        } catch (error) {
            return next(error);
        }
    }

    async update(req, res, next) {
        try {
            const {idHospital} = req.params;
            const {body} = req;

            const hospital = await _hospitalService.update(idHospital, body);
            return res.send(hospital);
        } catch (error) {
            return next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const {idHospital} = req.params;
            const deletedHospital = await _hospitalService.delete(idHospital);
            return res.send(deletedHospital);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = HospitalController;