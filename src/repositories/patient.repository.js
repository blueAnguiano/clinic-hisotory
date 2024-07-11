const BaseRepository = require('./base.repository');

let _patient = null;

class PatientRepository extends BaseRepository {
    constructor({Patient, PatientHospital}) {
        super(Patient);
        _patient = Patient;
        this.patientHospital = PatientHospital;
    }

    async getBySNN(ssn) {
        return await _patient.find({ssn: new RegExp(`.*${ssn}.*`)});
    }

    async getByClinic(idClinic) {
        return await _patient.find({clinic: idClinic});
    }

    async getByHospital(idHospital) {
        const patients = await this.patientHospital.find({hospital: idHospital});
        const idPatients = patients.map((patient) => patient.id);
        return await _patient.find({_id: {$in: idPatients}});
    }
}

module.exports = PatientRepository;