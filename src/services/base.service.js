class BaseService {
    constructor(repository) {
        this.repository = repository;
    }

    async get(id) {
        const data = await this.repository.get(id);
        return data;
    }

    async getAll() {
        return await this.repository.getAll();
    }

    async create(object) {
        return this.repository.create(object);
    }

    async delete(id) {
        return this.repository.delete(id);
    }
}

module.exports = BaseService;