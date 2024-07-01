const BaseRepository = require('./base.repository');

let _clinic = null;

class ClinicRepository extends BaseRepository {
    constructor({Clinic}) {
        super(Clinic);
        _clinic = Clinic;
    }

    async getClinicByName(name) {
        //TODO: review this, is not return any value, I will check how do I have to create the search
        return await _clinic.findOne({name});
    }
}


module.exports = ClinicRepository;