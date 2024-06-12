const BaseRepository = require('./base.repository');

let _personal = null;

class PersonalRepository extends BaseRepository {
    constructor({Personal}) {
        super(Personal);
        _personal = Personal;
    }

    async getPersonalByName(name) {
        return _personal.findOne({ name });
    }

    async getPersonalByLastname(lastname) {
        return _personal.findOne({ lastname });
    }

    async getPersonalByProfessionalId(professionalId) {
        return _personal.findOne({ professionalId });
    }
}

module.exports = PersonalRepository;