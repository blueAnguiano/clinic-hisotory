const BaseService = require('./base.service');

let _patientRepository = null;

class PatientService extends BaseService {
    constructor({PatientRepository}) {
        super(PatientRepository)
        _patientRepository = PatientRepository;
    }

    index() {
        return {
            message: 'Clinic Service Index',
        }
    }

    async getBySNN(ssn) {
        let data;
        if(!ssn) {
            const error = new Error();
            error.status = 400;
            error.message = `The Social Security Number is required`;
            throw error;
        }

        try {
            data = await _patientRepository.getBySNN(ssn);
        } catch (e) {
            const error = new Error();
            error.status = 501;
            error.message = `An error occurred while getting by '${ssn}', please contact your sys admin`;
            throw error;
        }

        if(!data) {
            const error = new Error();
            error.status = 404;
            error.message = `Data not found for ${ssn}`;
            throw error;
        }

        return data;
    }

    async getByClinic(idClinic) {
        let data;
        if(!idClinic) {
            const error = new Error();
            error.status = 400;
            error.message = `The Clinic ID is required`;
            throw error;
        }

        try {
            data = await _patientRepository.getByClinic(idClinic)
        } catch (e) {
            const error = new Error();
            error.status = 501;
            error.message = `An error occurred while getting by '${idClinic}', please contact your sys admin`;
            throw error;
        }

        if(!data) {
            const error = new Error();
            error.status = 404;
            error.message = `Data not found for ${idClinic}`;
            throw error;
        }

        return data;
    }

    async getByHospital(idHospital) {
        let data;

        if(!idHospital) {
            const error = new Error();
            error.status = 400;
            error.message = `The Hospital ID is required`;
            throw error;
        }

        try {
            data = await _patientRepository.getByHospital(idHospital);
        } catch (e) {
            const error = new Error();
            error.status = 501;
            error.message = `An error occurred while getting by '${idHospital}', please contact your sys admin`;
            throw error;
        }

        if(!data) {
            const error = new Error();
            error.status = 404;
            error.message = `Data not found for ${idHospital}`;
            throw error;
        }

        return data;
    }
}


module.exports = PatientService;