let _patientService = null;
let _userService = null;

class PatientController {
    constructor({PatientService}) {
        _patientService = PatientService;
    }

    index(req, res) {
        res.send(_patientService.index());
    }

    async get(req, res, next) {
        try {
            const {idPatient} = req.params;
            const patient = await _patientService.get(idPatient);
            return res.send(patient);
        } catch (error) {
            return next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const patients = await _patientService.getAll();
            return res.send(patients);
        } catch (error) {
            return next(error);
        }
    }

    async getBySNN(req, res, next) {
        try {
            const {ssn} = req.params;
            const patient = await _patientService.getBySNN(ssn);
            return res.send(patient);
        } catch (error) {
            return next(error);
        }
    }

    async getByName(req, res, next) {
        try {
            const {name} = req.params;
            const patient = await _patientService.getByName(name);
            return res.send(patient);
        } catch (error) {
            return next(error);
        }
    }

    async getByClinic(req, res, next) {
        try {
            const {idClinic} = req.params;
            const patient = await _patientService.getByClinic(idClinic);
            return res.send(patient);
        } catch (error) {
            return next(error);
        }
    }

    async getByHospital(req, res, next) {
        try {
            const {idHospital} = req.params;
            const patient = await _patientService.getByHospital(idHospital);
            return res.send(patient);
        } catch (error) {
            return next(error);
        }
    }

    async create(req, res, next) {
        try {
            const {body} = req;

            const patient = await _patientService.create(body);
            return res.status(201).send(patient);
        } catch (error) {
            return next(error);
        }

    }

    async update(req, res, next) {
        try {
            const {idPatient} = req.params;
            const {body} = req;

            const patient = await _patientService.update(idPatient, body);
            return res.send(patient);
        } catch (error) {
            return next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const {idPatient} = req.params;
            const deletedPatient = await _patientService.delete(idPatient);
            return res.send(deletedPatient);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = PatientController;