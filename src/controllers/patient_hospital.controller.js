let _patientHospitalService = null;

class PatientHospitalController {
    constructor({PatientHospitalService}) {
        _patientHospitalService = PatientHospitalService;
    }

    index(req, res) {
        res.send(_patientHospitalService.index());
    }

    async get(req, res, next) {
        try {
            const {idPatientHospital} = req.params;
            const patient = await _patientHospitalService.get(idPatientHospital);
            return res.send(patient);
        } catch (error) {
            return next(error);
        }

    }

    async getAll(req, res, next) {
        try {
            const patientsHospital = await _patientHospitalService.getAll();
            return res.send(patientsHospital);
        } catch (error) {
            return next(error);
        }
    }

    async create(req, res, next) {
        try {
            const {body} = req;
            const patientsHospitals = await _patientHospitalService.create(body);
            return res.status(201).send(patientsHospitals);
        } catch (error) {
            return next(error);
        }
    }

    async update(req, res, next) {
        try {
            const {idPatientHospital} = req.params;
            const {body} = req;

            const patientsHospital = await _patientHospitalService.update(idPatientHospital, body);
            return res.send(patientsHospital);
        } catch (error) {
            return next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const {idPatientHospital} = req.params;
            const deletedPatientHospital = await _patientHospitalService.delete(idPatientHospital);
            return res.send(deletedPatientHospital);
        } catch (error) {
            return next(error);
        }
    }

}

module.exports = PatientHospitalController;