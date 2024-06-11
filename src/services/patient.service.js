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

    async getPatientByName(name) {
        return await _patientRepository.getPatientByName(name);
    }

    async getPatientByLastname(lastname) {
        return await _patientRepository.getPatientByLastname(lastname);
    }

    async getPatientBySSN(ssn) {
        return await _patientRepository.getPatientBySSN(ssn);
    }
}

module.exports = PatientService;