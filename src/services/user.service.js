const BaseService = require('./base.service');
const _personalRepository = require("../controllers/user.controller");

let _userRepository = null;

class UserService extends BaseService {
    constructor({UserRepository}) {
        super(UserRepository);
        _userRepository = UserRepository;
    }

    index() {
        return {
            message: 'User Service Index',
        }
    }

    async getUserByUsername(username) {
        let data;

        if(!username) {
            const error = new Error();
            error.status = 400;
            error.message = `Username is required field`;
            throw error;
        }

        try {
            data = await _userRepository.getByUsername(username);
        } catch (e) {
            const error = new Error();
            error.status = 501;
            error.message = `An error occurred while getting by '${username}', please contact your sys admin`;
            throw error;
        }

        if(!data) {
            const error = new Error();
            error.status = 404;
            error.message = `No data found for ${username}`;
            throw error;
        }

        return data;
    }

    async getUserByEmail(email) {
        let data;

        if(!email) {
            const error = new Error();
            error.status = 400;
            error.message = `Email is required`;
            throw error;
        }

        try {
            data = await _userRepository.getByEmail(email);
        } catch (e) {
            const error = new Error();
            error.status = 501;
            error.message = `An error occurred while getting by '${email}', please contact your sys admin`;
            throw error;
        }

        if(!data) {
            const error = new Error();
            error.status = 404;
            error.message = `No data found for ${email}`;
            throw error;
        }

        return data;
    }

    async getUserByRole(role) {
        let data;

        if(!role) {
            const error = new Error();
            error.status = 400;
            error.message = `Role is required`;
            throw error;
        }

        try {
            data = await _userRepository.getByRole(role);
        } catch (e) {
            const error = new Error();
            error.status = 501;
            error.message = `An error occurred while getting by '${role}', please contact your sys admin`;
            throw error;
        }

        if(!data) {
            const error = new Error();
            error.status = 404;
            error.message = `No data found for ${role}`;
            throw error;
        }

        return data;
    }
}

module.exports = UserService;