const BaseRepository = require('./base.repository');

let _personalType = null;

class PersonalTypeRepository extends BaseRepository {
    constructor({PersonalType}) {
        super(PersonalType);
        _personalType = PersonalType;
    }

}

module.exports = PersonalTypeRepository;