const BaseRepository = require('./base.repository');
let _clinicHistory = null;

class ClinicHistoryRepository extends BaseRepository {
    constructor({ClinicHistory}) {
        super(ClinicHistory);
        _clinicHistory = ClinicHistory;
    }

}

module.exports = ClinicHistoryRepository;