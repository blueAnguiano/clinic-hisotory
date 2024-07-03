const BaseRepository = require('./base.repository');

let _patient = null;

class PatientRepository extends BaseRepository {
    constructor({Patient}) {
        super(Patient);
        _patient = Patient;
    }

    async getBySNN(ssn) {
        return await _patient.find({ssn: new RegExp(`.*${ssn}.*`)});
    }
}

module.exports = PatientRepository;