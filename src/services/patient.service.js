const BaseService = require('./base.service');

let _patientRepository = null;

class PatientService extends BaseService {
    constructor({PatientRepository}) {
        super(PatientRepository)
        _patientRepository = PatientRepository;
    }

    index() {
        return {
            message: 'Clinic Service Index',
        }
    }

    async getBySNN(ssn) {
        return await _patientRepository.getBySNN(ssn);
    }

    async getByClinic(idClinic) {
        return await _patientRepository.getByClinic(idClinic);
    }

    async getByHospital(idHospital) {
        return await _patientRepository.getByHospital(idHospital);
    }
}


module.exports = PatientService;