let _officeClinicService = null;

class OfficeClinicController {
    constructor({OfficeClinicService}) {
        _officeClinicService = OfficeClinicService;
    }

    index(req, res) {
        res.send(_officeClinicService.index());
    }

    async get(req, res) {
        const {idOfficeClinic} = req.params;
        const officeClinic = await _officeClinicService.get(idOfficeClinic);
        return res.send(officeClinic);
    }

    async getAll(req, res) {
        const officeClinics = await _officeClinicService.getAll();
        return res.send(officeClinics);
    }

    async create(req, res) {
        const {body} = req;
        const createdOfficeClinic = await _officeClinicService.create(body);
        return res.status(201).send(createdOfficeClinic);
    }

    async update(req, res) {
        const {idOfficeClinic} = req.params;
        const {body} = req;

        const updatedOfficeClinic = await _officeClinicService.update(idOfficeClinic, body);
        return res.send(updatedOfficeClinic);
    }

    async delete(req, res) {
        const {idOfficeClinic} = req.params;
        const deletedOfficeClinic = await _officeClinicService.delete(idOfficeClinic);
        return res.send(deletedOfficeClinic);
    }
}

module.exports = OfficeClinicController;