const BaseService = require('./base.service');

let _patientHospitalRepository = null;

class PatientHospitalService extends BaseService {
    constructor({PatientHospitalRepository}) {
        super(PatientHospitalRepository);
        _patientHospitalRepository = PatientHospitalRepository;
    }

    index() {
        return {
            message: 'Patient Hospital Service Index',
        }
    }
}

module.exports = PatientHospitalService;