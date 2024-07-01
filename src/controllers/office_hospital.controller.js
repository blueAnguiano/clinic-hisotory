let _officeHospitalService = null;

class OfficeHospitalController {
    constructor({OfficeHospitalService}) {
        _officeHospitalService = OfficeHospitalService;
    }

    index(req, res) {
        res.send(_officeHospitalService.index());
    }

    async get(req, res) {
        const {idOfficeHospital} = req.params;
        const officeHospital = await _officeHospitalService.get(idOfficeHospital);
        return res.send(officeHospital);
    }

    async getAll(req, res) {
        const officeHospitals = await _officeHospitalService.getAll();
        return res.send(officeHospitals);
    }

    async create(req, res) {
        const {body} = req;
        const officeHospital = await _officeHospitalService.create(body);
        return res.status(201).send(officeHospital);
    }

    async update(req, res) {
        const {idOfficeHospital} = req.params;
        const {body} = req;

        const officeHospital = await _officeHospitalService.update(idOfficeHospital, body);
        return res.send(officeHospital);
    }

    async delete(req, res) {
        const {idOfficeHospital} = req.params;
        const deletedOfficeHospital = await _officeHospitalService.delete(idOfficeHospital);
        return res.send(deletedOfficeHospital);
    }
}

module.exports = OfficeHospitalController;