const Base = require('./base.service');

let _clinicRepository = null;

class ClinicService extends Base {
    constructor({ClinicRepository}) {
        super(ClinicRepository);
        _clinicRepository = ClinicRepository;
    }

    index() {
        return {
            message: 'Hello World'
        }
    }

    async getClinicByName(name){
        return await _clinicRepository.getClinicByName(name);
    }
}

module.exports = ClinicService;