const BaseRepository = require('./base.repository');

let _personal = null;

class PersonalRepository extends BaseRepository {
    constructor({Personal}) {
        super(Personal);
        _personal = Personal;
    }

    async getByProfessionalId(professionalId) {
        return _personal.find({professionalId: new RegExp(`.*${professionalId}.*`)});
    }
}

module.exports = PersonalRepository;