const BaseService = require('./base.service');

let _officeHospitalRepository = null

class OfficeHospitalService extends BaseService {
    constructor({OfficeHospitalRepository}) {
        super(OfficeHospitalRepository);
        _officeHospitalRepository = OfficeHospitalRepository;
    }

    index() {
        return {
            message: 'Office-Hospital Service Index',
        }
    }
}

module.exports = OfficeHospitalService;