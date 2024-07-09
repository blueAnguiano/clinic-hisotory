let _authService = null;

class AuthController {
    constructor({AuthService}) {
        _authService = AuthService;
    }

    async signUp(req, res, next) {
        try {
            const {body} = req;

            if(body.role !== "sys admin") {
                if(body.createdBy === undefined || body.createdBy === "") {
                    const error = new Error();
                    error.status = 400;
                    error.message = `The CreatedBy field is a required field`;
                    return next(error);
                }
            }

            const user = await _authService.signUp(body);
            return res.status(201).send(user);
        } catch (e) {
            return next(e);
        }

    }

    async login(req, res, next) {
        try {
            const {body} = req;
            const user = await _authService.signIn(body);
            return res.status(201).send(user);
        } catch (error) {
            return next(error);
        }

    }
}

module.exports = AuthController;