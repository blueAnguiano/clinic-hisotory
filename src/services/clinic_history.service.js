const BaseService = require('./base.service');


let _clinicHistoryRepository = null;

class ClinicHistoryService extends BaseService {
    constructor({ClinicHistoryRepository}) {
        super(ClinicHistoryRepository);
        _clinicHistoryRepository = ClinicHistoryRepository;
    }

    index() {
        return {
            message: 'Clinic History Service Index',
        }
    }

}

module.exports = ClinicHistoryService;