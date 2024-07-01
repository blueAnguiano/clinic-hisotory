const BaseService = require('./base.service');

let _expedientRepository = null;

class ExpectationService extends BaseService {
    constructor({ExpedientRepository}) {
        super(ExpedientRepository);
        _expedientRepository = ExpedientRepository;
    }

    index() {
        return {
            message: 'Expedient Service Index',
        }
    }
}

module.exports = ExpectationService;