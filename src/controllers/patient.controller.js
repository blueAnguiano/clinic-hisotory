let _patientService = null;

class PatientController {
    constructor({PatientService}) {
        _patientService = PatientService;
    }

    async get(req, res) {
        const {idPatient} = req.params;
        const patient = await _patientService.findById(idPatient);
        return res.send(patient);
    }

    async getAll(req, res) {
        const patients = await _patientService.getAll();
        return res.send(patients);
    }

    async getByName(req, res) {
        const {name} = req.params;
        const patient = await _patientService.getPatientByName(name);
        return res.send(patient);
    }

    async getByLastname(req, res) {
        const {lastname} = req.params;
        const patient = await _patientService.getPatientByLastname(lastname);
        return res.send(patient);
    }

    async getBySSN(req, res) {
        const {ssn} = req.params;
        const patient = await _patientService.getPatientBySSN(ssn);
        return res.send(patient);
    }

    //create more queries to get by anu kind of field

    async update(req, res) {
        const {body} = req;
        const {idPatient} = req.params;
        const patient = await _patientService.update(idPatient, body);
        return res.send(patient);
    }

    async delete(req, res) {
        const {idPatient} = req.params;
        const deletePatient = await _patientService.delete(idPatient);
        return res.send(deletePatient);
    }
}


module.exports = PatientController;