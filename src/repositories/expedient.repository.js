const BaseRepository = require('./base.repository');

let _expedient =null;


class ExpedientRepository extends BaseRepository {
    constructor({Expedient}) {
        super(Expedient);
        _expedient = Expedient;
    }
}

module.exports = ExpedientRepository;