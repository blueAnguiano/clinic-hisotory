const BaseRepository = require('./base.repository');

let _officeHospital = null;

class OfficeHospitalRepository extends BaseRepository {
    constructor({OfficeHospital}) {
        super(OfficeHospital);
        _officeHospital = OfficeHospital;
    }
}

module.exports = OfficeHospitalRepository;