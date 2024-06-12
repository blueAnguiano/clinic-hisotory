let _clinicService = null;

class ClinicController {
    constructor({ClinicService}) {
        _clinicService = ClinicService;
    }

    async get(req, res) {
        const {idClinic} = req.params;
        const clinic = await _clinicService.get(idClinic);
        return res.send(clinic);
    }

    async getAll(req, res) {
        const clinic = await _clinicService.getAll();
        return res.send(clinic);
    }

    async getByName(req, res) {
        const {name} = req.params;
        const clinic = await _clinicService.getClinicByName(name);
        return res.send(clinic);
    }

    async update(req, res) {
        const {body} = req;
        const {idClinic} = req.params;
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