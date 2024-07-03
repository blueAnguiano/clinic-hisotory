let _patientHospitalService = null;

class PatientHospitalController {
    constructor({PatientHospitalService}) {
        _patientHospitalService = PatientHospitalService;
    }

    index(req, res) {
        res.send(_patientHospitalService.index());
    }

    async get(req, res) {
        const {idPatientHospital} = req.params;
        const patient = await _patientHospitalService.get(idPatientHospital);
        return res.send(patient);
    }

    async getAll(req, res) {
        const patientsHospital = await _patientHospitalService.getAll();
        return res.send(patientsHospital);
    }

    async create(req, res) {
        const {body} = req;
        const patientsHospitals = await _patientHospitalService.create(body);
        return res.status(201).send(patientsHospitals);
    }

    async update(req, res) {
        const {idPatientHospital} = req.params;
        const {body} = req;

        const patientsHospital = await _patientHospitalService.update(idPatientHospital, body);
        return res.send(patientsHospital);
    }

    async delete(req, res) {
        const {idPatientHospital} = req.params;
        const deletedPatientHospital = await _patientHospitalService.delete(idPatientHospital);
        return res.send(deletedPatientHospital);
    }

}

module.exports = PatientHospitalController;