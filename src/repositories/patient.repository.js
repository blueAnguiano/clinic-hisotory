//const User = require('user');
const BaseRepository = require('./base.repository');

let _patient = null;

class PatientRepository extends BaseRepository {
    constructor({Patient}) {
        super(Patient);
        _patient = Patient
    }
}

module.exports = PatientRepository;