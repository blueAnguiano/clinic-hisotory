const Base = require('base.service');

let _personalRepository = null;

class PersonalService extends Base{
    constructor({PersonalRepository}) {
        super(PersonalRepository);
        _personalRepository = PersonalRepository;
    }
    index() {
        return {
            message: 'Personal Service index',
        }
    }

    getPersonal() {

    }
}

module.exports = PersonalService;