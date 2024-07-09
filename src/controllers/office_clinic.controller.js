let _officeClinicService = null;

class OfficeClinicController {
    constructor({OfficeClinicService}) {
        _officeClinicService = OfficeClinicService;
    }

    index(req, res) {
        res.send(_officeClinicService.index());
    }

    async get(req, res, next) {
        try {
            const {idOfficeClinic} = req.params;
            const officeClinic = await _officeClinicService.get(idOfficeClinic);
            return res.send(officeClinic);
        } catch (error) {
            return next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const officeClinics = await _officeClinicService.getAll();
            return res.send(officeClinics);
        } catch (error) {
            return next(error);
        }
    }

    async create(req, res, next) {
        try {
            const {body} = req;
            const createdOfficeClinic = await _officeClinicService.create(body);
            return res.status(201).send(createdOfficeClinic);
        } catch (error) {
            return next(error);
        }
    }

    async update(req, res, next) {
        try {
            const {idOfficeClinic} = req.params;
            const {body} = req;

            const updatedOfficeClinic = await _officeClinicService.update(idOfficeClinic, body);
            return res.send(updatedOfficeClinic);
        } catch (error) {
            return next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const {idOfficeClinic} = req.params;
            const deletedOfficeClinic = await _officeClinicService.delete(idOfficeClinic);
            return res.send(deletedOfficeClinic);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = OfficeClinicController;