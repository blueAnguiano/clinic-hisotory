const BaseRepository = require('./base.repository');

const {PatientHospital} = require('../models');

let _patient = null;

class PatientRepository extends BaseRepository {
    constructor({Patient}) {
        super(Patient);
        _patient = Patient;
    }

    async getBySNN(ssn) {
        return await _patient.find({ssn: new RegExp(`.*${ssn}.*`)});
    }

    async getByClinic(idClinic) {
        return await _patient.find({clinic: idClinic});
    }

    async getByHospital(idHospital) {
        const patients = await PatientHospital.find({hospital: idHospital});
        const idPatients = patients.map((patient) => patient.id);
        return await _patient.find({_id: {$in: idPatients}});
    }
}

module.exports = PatientRepository;