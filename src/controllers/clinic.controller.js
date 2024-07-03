let _clinicService = null

class ClinicController {
    constructor({ClinicService}) {
        _clinicService = ClinicService;
    }

    index(req, res) {
        res.send(_clinicService.index());
    }

    async get(req, res) {
        const {idClinic} = req.params
        const clinic = await _clinicService.get(idClinic);
        return res.send(clinic);
    }

    async getAll(req, res) {
        const clinics = await _clinicService.getAll();
        return res.send(clinics);
    }

    async getByName(req, res) {
        const {name} = req.params;
        const clinic = await _clinicService.getByName(name);
        return res.send(clinic);
    }

    async getByState(req, res) {
        const {state} = req.params;
        const clinic = await _clinicService.getByState(state);
        return res.send(clinic);
    }

    async create(req, res) {
        const {body} = req;
        const clinic = await _clinicService.create(body);
        return res.status(201).send(clinic);
    }

    async update(req, res) {
        const {idClinic} = req.params;
        const {body} = req;

        const clinic = await _clinicService.update(idClinic, body);
        return res.send(clinic);
    }

    async delete(req, res) {
        const {idClinic} = req.params;
        const deletedClinic = await _clinicService.delete(idClinic);
        return res.send(deletedClinic);
    }

}

module.exports = ClinicController;