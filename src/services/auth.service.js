const {JwtHelper} = require('../helpers');

let _userService = null;

class AuthService {
    constructor({UserService}) {
        _userService = UserService;
    }

    async validateUser(username) {
        const exists = await _userService.getUserByUsername(username);
        return {exists: !!exists, user: exists};
    }

    async signUp(user) {
        const validated = await this.validateUser(user.username);

        if(validated.exists) {
            return false;
        }

        return _userService.create(user);
    }

    async signIn(user) {
        const {username, password} = user;

        const validated = await this.validateUser(user.username);

        if(!validated.exists) {
            return false;
        }

        const coincided = validated.user.comparePass(password);

        if(!coincided) {
            return false;
        }

        let encode = {
            username: username,
            id: validated.user._id,
        }

        const token = JwtHelper.generateToken(encode);

        return {user: validated.user, token};

    }
}

module.exports = AuthService;