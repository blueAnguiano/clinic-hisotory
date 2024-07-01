const BaseRepository = require('./base.repository');

let _hospital = null;

class HospitalRepository extends BaseRepository {
    constructor({Hospital}) {
        super(Hospital);
        _hospital = Hospital;
    }

    async getHospitalByName(name) {
        return await _hospital.findOne({name});
    }

}

module.exports = HospitalRepository;