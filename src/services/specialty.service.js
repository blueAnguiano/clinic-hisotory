const BaseService = require('./base.service');

let _specialtyRepository = null;

class SpecialtyService extends BaseService {
    constructor({SpecialtyRepository}) {
        super(SpecialtyRepository);
        _specialtyRepository = SpecialtyRepository;
    }

    index() {
        return {
            message: 'Specialty Service Index',
        }
    }
}

module.exports = SpecialtyService;