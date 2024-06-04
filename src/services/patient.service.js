const Base = require('base.service');

let _patientRepository = null;

class PatientService extends Base {
    constructor({PatientRepository}) {
        super(PatientRepository);
        _patientRepository = PatientRepository;
    }
    index() {
        return {
            message: 'Patient Service index',
        }
    }
}

module.exports = PatientService;