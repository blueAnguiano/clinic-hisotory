const BaseRepository = require('./base.repository');

let _user = null;

class UserRepository extends BaseRepository {
    constructor({User}) {
        super(User);
        _user = User;
    }

    async getByUsername(username) {
        return await _user.findOne({username});
    }

    async getByEmail(email) {
        return await _user.findOne({email});
    }

    async getByRole(role) {
        return await _user.findOne({role});
    }
}

module.exports = UserRepository;