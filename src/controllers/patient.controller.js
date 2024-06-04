let _patientService = null;

class PatientController {
    constructor({PatientService}) {
        _patientService = PatientService;
    }
}


module.exports = PatientController;