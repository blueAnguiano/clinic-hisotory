const Base = require('./base.service');

let _personalRepository = null;

class PersonalService extends Base {
    constructor({PersonalRepository}) {
        super(PersonalRepository);
        _personalRepository = PersonalRepository;
    }

    index() {
        return {
            message: 'Personal Service index',
        }
    }

    async getPersonalByName(name) {
        return await _personalRepository.getPersonalByName(name);
    }

    async getPersonalByLastname(personal) {
        return await _personalRepository.getPersonalByLastname(personal);
    }

    async getPersonalByProfessionalId(professionId) {
        return await _personalRepository.getPersonalByProfessionalId(professionId);
    }
}

module.exports = PersonalService;