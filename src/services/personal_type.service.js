const BaseService = require('./base.service');

let _personalRepository = null;

class PersonalTypeService extends BaseService {
    constructor({PersonalTypeRepository}) {
        super(PersonalTypeRepository);
        _personalRepository = PersonalTypeRepository;
    }

    index() {
        return {
            message: 'PersonalType Service Index',
        }
    }
}

module.exports = PersonalTypeService;