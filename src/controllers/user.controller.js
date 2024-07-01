let _userService = null;

class UserController {
    constructor({UserService}) {
        _userService = UserService;
    }

    index(req, res) {
        res.send(_userService.index());
    }

    async get(req, res) {
        const {idUser} = res.params;
        const user = await _userService.get(idUser);
        return res.send(user);
    }

    async getAll(req, res) {
        const users = await _userService.getAll();
        return res.send(users);
    }

    async getByUsername(req, res) {
        const {username} = req.params;
        const user = await _userService.getUserByUsername(username);
        return res.send(user);
    }

    async getByEmail(req, res) {
        const {email} = req.params;
        const user = await _userService.getUserByEmail(email);
        return res.send(user);
    }

    async getByRole(req, res) {
        const {role} = req.params;
        const user = await _userService.getUserByRole(role);
        return res.send(user);
    }

    async create(req, res) {
        const {body} = req;
        const user = await _userService.create(body);
        return res.status(201).send(user);
    }

    async update(req, res) {
        const {idUser} = res.params;
        const {body} = req;

        const updatedUser = await _userService.update(idUser, body);
        return res.send(updatedUser);
    }

    async delete(req, res) {
        const {idUser} = res.params;
        const deletedUser = await _userService.delete(idUser);
        return res.send(deletedUser);
    }
}

module.exports = UserController;