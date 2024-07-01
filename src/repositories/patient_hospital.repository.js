const BaseRepository = require('./base.repository');

let _patientHospital = null;

class PatientHospitalRepository extends BaseRepository {
    constructor({PatientHospital}) {
        super(PatientHospital)
        _patientHospital = PatientHospital;
    }
}

module.exports = PatientHospitalRepository;