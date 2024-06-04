class User {
    constructor() {
        if(new.target === User) {
            throw new Error('Cannot instantiate abstract class directly.');
        }
    }

    getUser() {
        throw new Error('Abstract method getUser() must be implemented in subclass.');
    }

    createUser() {
        throw new Error('Abstract method createUser() must be implemented in subclass.');
    }

    updateUser() {
        throw new Error('Abstract method updateUser() must be implemented in subclass.');
    }

}

module.exports = User;