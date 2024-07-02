const BaseRepository = require('./base.repository');
const _clinicRepository = require("./clinic.repository");

let _clinic = null;

class ClinicRepository extends BaseRepository {
    constructor({Clinic}) {
        super(Clinic);
        _clinic = Clinic;
    }

}


module.exports = ClinicRepository;