const BaseService = require('./base.service');

let _personalRepository = null;

class PersonalService extends BaseService {
    constructor({PersonalRepository}) {
        super(PersonalRepository);
        _personalRepository = PersonalRepository;
    }

    index() {
        return {
            message: 'Specialty Service Index',
        }
    }
}

module.exports = PersonalService;