let _hospitalService = null;

class HospitalController {
    constructor({HospitalService}) {
        _hospitalService = HospitalService;
    }

    index(req, res) {
        res.send(_hospitalService.index());
    }

    async get(req, res) {
        const {idHospital} = req.params;
        const hospital = await _hospitalService.get(idHospital);
        return res.send(hospital);
    }

    async getAll(req, res) {
        const hospitals = await _hospitalService.getAll();
        return res.send(hospitals);
    }

    async getByName(req, res) {
        const {name} = req.params;
        const hospital = await _hospitalService.getByName(name);
        return res.send(hospital);
    }

    async getByState(req, res) {
        const {state} = req.params;
        const hospital = await _hospitalService.getByState(state);
        return res.send(hospital);
    }

    async create(req, res) {
        const {body} = req;
        const hospital = await _hospitalService.create(body);
        return res.status(201).send(hospital);
    }

    async update(req, res) {
        const {idHospital} = req.params;
        const {body} = req;

        const hospital = await _hospitalService.update(idHospital, body);
        return res.send(hospital);
    }

    async delete(req, res) {
        const {idHospital} = req.params;
        const deletedHospital = await _hospitalService.delete(idHospital);
        return res.send(deletedHospital);
    }
}

module.exports = HospitalController;