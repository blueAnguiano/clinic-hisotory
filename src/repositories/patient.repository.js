const BaseRepository = require('./base.repository');

let _patient = null;

class PatientRepository extends BaseRepository {
    constructor({Patient}) {
        super(Patient);
        _patient = Patient
    }

    async getPatientByName(name) {
        return await _patient.findOne({ name });
    }

    async getPatientByLastname(lastname) {
        return await _patient.findOne({ lastname });
    }

    async getPatientBySSN(ssn) {
        return await _patient.findOne({ ssn });
    }
}

module.exports = PatientRepository;