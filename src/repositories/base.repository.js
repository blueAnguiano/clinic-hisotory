class Base {
    constructor(model) {
        this.model = model;
    }

    async get(id) {
        return await this.model.findById(id);
    }

    async getAll() {
        return await this.model.find({});
    }

    async create(object) {
        return this.model.create(object);
    }

    async update(id, object) {
        return await this.model.findByIdAndUpdate(id, object, {new: true});
    }

    async delete(id) {
        await this.model.findByIdAndDelete(id);
    }
}

module.exports = Base;