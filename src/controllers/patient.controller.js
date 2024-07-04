let _patientService = null;

class PatientController {
    constructor({PatientService}) {
        _patientService = PatientService;
    }

    index(req, res) {
        res.send(_patientService.index());
    }

    async get(req, res) {
        const {idPatient} = req.params;
        const patient = await _patientService.get(idPatient);
        return res.send(patient);
    }

    async getAll(req, res) {
        const patients = await _patientService.getAll();
        return res.send(patients);
    }

    async getBySNN(req, res) {
        const {ssn} = req.params;
        const patient = await _patientService.getBySNN(ssn);
        return res.send(patient);
    }

    async getByName(req, res) {
        const {name} = req.params;
        const patient = await _patientService.getByName(name);
        return res.send(patient);
    }

    async getByClinic(req, res) {
        const {idClinic} = req.params;
        const patient = await _patientService.getByClinic(idClinic);
        return res.send(patient);
    }

    async getByHospital(req, res) {
        const {idHospital} = req.params;
        const patient = await _patientService.getByHospital(idHospital);
        return res.send(patient);
    }

    async create(req, res) {
        const {body} = req;
        const patient = await _patientService.create(body);
        return res.status(201).send(patient);
    }

    async update(req, res) {
        const {idPatient} = req.params;
        const {body} = req;

        const patient = await _patientService.update(idPatient, body);
        return res.send(patient);
    }

    async delete(req, res) {
        const {idPatient} = req.params;
        const deletedPatient = await _patientService.delete(idPatient);
        return res.send(deletedPatient);
    }
}

module.exports = PatientController;