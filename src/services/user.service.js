const BaseService = require('./base.service');

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
        return await _userRepository.getByUsername(username);
    }

    async getUserByEmail(email) {
        return await _userRepository.getByEmail(email);
    }

    async getUserByRole(role) {
        return await _userRepository.getByRole(role);
    }
}

module.exports = UserService;