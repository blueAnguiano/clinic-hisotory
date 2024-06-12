const BaseRepository = require('./base.repository');

let _clinic = null;

class ClinicRepository extends BaseRepository {
    constructor({Clinic}) {
        super(Clinic);
        _clinic = Clinic;
    }

    async getClinicByName(name) {
        return await _clinic.findOne({ name });
    }
}

module.exports = ClinicRepository;