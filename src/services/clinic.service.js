const Base = require('./base.service');

let _clinicRepository = null;

class ClinicService extends Base {
    constructor({ClinicRepository}) {
        super(ClinicRepository);
        _clinicRepository = ClinicRepository;
    }

    async getClinicByName(name){
        return await _clinicRepository.getClinicByName(name);
    }
}

module.exports = ClinicService;