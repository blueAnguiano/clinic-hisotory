let _authService = null;

class AuthController {
    constructor({AuthService}) {
        _authService = AuthService;
    }

    async signUp(req, res) {
        const {body} = req;

        if(body.role !== "sys admin") {
            if(body.createdBy === undefined || body.createdBy === "") {
                return res.status(400).send({error: 'error'})
            }
        }

        const user = await _authService.signUp(body);
        return res.status(201).send(user);
    }

    async login(req, res) {
        const {body} = req;
        const user = await _authService.signIn(body);
        return res.status(201).send(user);
    }
}

module.exports = AuthController;