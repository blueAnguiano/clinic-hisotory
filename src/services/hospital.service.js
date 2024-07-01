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

    //todo: this is a generic method, this would be in the base repository in patient, personal and clinic will repeat
    async getHospitalByName(name){
        return await _hospitalRepository.getHospitalByName(name);
    }
}

module.exports = HospitalService;