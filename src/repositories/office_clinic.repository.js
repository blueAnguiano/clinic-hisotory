const BaseRepository = require('./base.repository');

let _officeClinic = null;

class OfficeClinicRepository extends BaseRepository {
    constructor({OfficeClinic}) {
        super(OfficeClinic);
        _officeClinic = OfficeClinic;
    }
}

module.exports = OfficeClinicRepository;