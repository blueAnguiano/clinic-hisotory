const BaseService = require('./base.service');

let _officeClinicRepository = null;

class OfficeClinicService extends BaseService {
    constructor({OfficeClinicRepository}) {
        super(OfficeClinicRepository);
        _officeClinicRepository = OfficeClinicRepository;
    }

    index() {
        return {
            message: 'Office Clinic Service Index',
        }
    }
}

module.exports = OfficeClinicService;