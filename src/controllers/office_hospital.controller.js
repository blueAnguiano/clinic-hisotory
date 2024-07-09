let _officeHospitalService = null;

class OfficeHospitalController {
    constructor({OfficeHospitalService}) {
        _officeHospitalService = OfficeHospitalService;
    }

    index(req, res) {
        res.send(_officeHospitalService.index());
    }

    async get(req, res, next) {
        try {
            const {idOfficeHospital} = req.params;
            const officeHospital = await _officeHospitalService.get(idOfficeHospital);
            return res.send(officeHospital);
        } catch (error) {
            return next(error);
        }

    }

    async getAll(req, res, next) {
        try {
            const officeHospitals = await _officeHospitalService.getAll();
            return res.send(officeHospitals);
        } catch (error) {
            return next(error);
        }

    }

    async create(req, res, next) {
        try {
            const {body} = req;
            const officeHospital = await _officeHospitalService.create(body);
            return res.status(201).send(officeHospital);
        } catch (error) {
            return next(error);
        }
    }

    async update(req, res, next) {
        try {
            const {idOfficeHospital} = req.params;
            const {body} = req;

            const officeHospital = await _officeHospitalService.update(idOfficeHospital, body);
            return res.send(officeHospital);
        } catch (error) {
            return next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const {idOfficeHospital} = req.params;
            const deletedOfficeHospital = await _officeHospitalService.delete(idOfficeHospital);
            return res.send(deletedOfficeHospital);
        } catch (error) {
            return next(error);
        }

    }
}

module.exports = OfficeHospitalController;