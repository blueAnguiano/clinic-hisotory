const BaseRepository = require('./base.repository');

let _hospital = null;

class HospitalRepository extends BaseRepository {
    constructor({Hospital}) {
        super(Hospital);
        _hospital = Hospital;
    }
}

module.exports = HospitalRepository;