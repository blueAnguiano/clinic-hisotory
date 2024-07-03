const BaseRepository = require('./base.repository');

let _specialty = null

class SpecialtyRepository extends BaseRepository {
    constructor({Specialty}) {
        super(Specialty);
        _specialty = Specialty;
    }
}

module.exports = SpecialtyRepository;