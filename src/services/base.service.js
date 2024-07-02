class BaseService {
    constructor(repository) {
        this.repository = repository;
    }

    async get(id) {
        return await this.repository.get(id);
    }

    async getAll() {
        return await this.repository.getAll();
    }

    async getByName(name) {
        return await this.repository.getByName(name);
    }

    async getByState(state) {
        return await this.repository.getByState(state);
    }

    async create(object) {
        return this.repository.create(object);
    }

    async delete(id) {
        return this.repository.delete(id);
    }
}

module.exports = BaseService;