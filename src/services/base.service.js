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

    async create(entity) {
        return this.repository.create(entity);
    }

    async update(id, entity) {
        return this.repository.update(id, entity);
    }

    async delete(id) {
        return this.repository.delete(id);
    }

}

module.exports = BaseService;