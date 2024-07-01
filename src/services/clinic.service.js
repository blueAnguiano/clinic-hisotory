const BaseService = require('./base.service');

let _clinicRepository = null;

class ClinicService extends BaseService {
    constructor({ClinicRepository}) {
        super(ClinicRepository);
        _clinicRepository = ClinicRepository;
    }

    index() {
        return {
            message: 'Clinic Service Index',
        }
    }

    async getClinicByName(name) {
        return await _clinicRepository.getClinicByName(name);
    }
}

module.exports = ClinicService;