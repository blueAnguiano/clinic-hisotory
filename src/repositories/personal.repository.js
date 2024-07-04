const BaseRepository = require('./base.repository');

const {OfficeClinic, OfficeHospital} = require('../models');

let _personal = null;

class PersonalRepository extends BaseRepository {
    constructor({Personal}) {
        super(Personal);
        _personal = Personal;
    }

    async getByProfessionalId(professionalId) {
        return await _personal.find({professionalId: new RegExp(`.*${professionalId}.*`)});
    }

    async getByClinic(idClinic) {
        const office = await OfficeClinic.find({clinic: idClinic});
        let idPersonals = office.map((item) => item.personal._id.toString());
        return await _personal.find({_id: {$in: idPersonals}});
    }

    async getByHospital(idHospital) {
        const office = await OfficeHospital.find({hospital: idHospital});
        let idPersonals = office.map((item) => item.personal._id.toString());
        return await _personal.find({_id: {$in: idPersonals}});
    }
}

module.exports = PersonalRepository;