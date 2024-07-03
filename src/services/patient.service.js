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
}


module.exports = PatientService;