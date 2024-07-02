const BaseService = require('./base.service');

let _hospitalRepository = null;

class HospitalService extends BaseService {
    constructor({HospitalRepository}) {
        super(HospitalRepository);
        _hospitalRepository = HospitalRepository;
    }

    index(){
        return {
            message: 'Hospital Service Index',
        }
    }
}

module.exports = HospitalService;