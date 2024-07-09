let _userService = null;

class UserController {
    constructor({UserService}) {
        _userService = UserService;
    }

    index(req, res) {
        res.send(_userService.index());
    }

    async get(req, res, next) {
        try {
            const {idUser} = res.params;
            const user = await _userService.get(idUser);
            return res.send(user);
        } catch (error) {
            return next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const users = await _userService.getAll();
            return res.send(users);
        } catch (error) {
            return next(error);
        }
    }

    async getByUsername(req, res, next) {
        try {
            const {username} = req.params;
            const user = await _userService.getUserByUsername(username);
            return res.send(user);
        } catch (error) {
            return next(error);
        }
    }

    async getByEmail(req, res, next) {
        try {
            const {email} = req.params;
            const user = await _userService.getUserByEmail(email);
            return res.send(user);
        } catch (error) {
            return next(error);
        }
    }

    async getByRole(req, res, next) {
        try {
            const {role} = req.params;
            const user = await _userService.getUserByRole(role);
            return res.send(user);
        } catch (error) {
            return next(error);
        }
    }

    async update(req, res, next) {
        try {
            const {idUser} = res.params;
            const {body} = req;

            const updatedUser = await _userService.update(idUser, body);
            return res.send(updatedUser);
        } catch (error) {
            return next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const {idUser} = res.params;
            const deletedUser = await _userService.delete(idUser);
            return res.send(deletedUser);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = UserController;