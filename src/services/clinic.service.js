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

}

module.exports = ClinicService;