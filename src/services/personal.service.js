const BaseService = require('./base.service');

let _personalRepository = null;

class PersonalService extends BaseService {
    constructor({PersonalRepository}) {
        super(PersonalRepository);
        _personalRepository = PersonalRepository;
    }

    index() {
        return {
            message: 'Specialty Service Index',
        }
    }

    async getByProfessionalId(professionalId) {
        let data;

        if(!professionalId) {
            const error = new Error();
            error.status = 400;
            error.message = `Professional Id is required`;
            throw error;
        }

        try {
            data = await _personalRepository.getByProfessionalId(professionalId);
        } catch (e) {
            const error = new Error();
            error.status = 501;
            error.message = `An error occurred while getting by '${professionalId}', please contact your sys admin`;
            throw error;
        }

        if(!data) {
            const error = new Error();
            error.status = 404;
            error.message = `Data not found for ${professionalId}`;
            throw error;
        }

        return data;
    }

    async getByClinic(idClinic) {
        let data;

        if(!idClinic) {
            const error = new Error();
            error.status = 400;
            error.message = `Clinic ID is required`;
            throw error;
        }

        try {
            data = await _personalRepository.getByClinic(idClinic);
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
            error.message = `Hospital ID is required`;
            throw error;
        }

        try {
            data = await _personalRepository.getByHospital(idHospital);
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

module.exports = PersonalService;