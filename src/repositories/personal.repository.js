const BaseRepository = require('./base.repository');

let _personal = null;

class PersonalRepository extends BaseRepository {
    constructor({Personal}) {
        super(Personal);
        _personal = Personal;
    }
}

module.exports = PersonalRepository;