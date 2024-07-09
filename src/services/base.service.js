class BaseService {
    constructor(repository) {
        this.repository = repository;
    }

    async get(id) {
        let data;

        if (!id) {
            const error = new Error();
            error.status = 400;
            error.message = `The ID is required field`;
            throw error;
        }

        try {
            data = await this.repository.get(id);
        } catch (e) {
            const error = new Error();
            error.status = 501;
            error.message = `An error occurred while getting by '${id}', please contact your sys admin`;
            throw error;
        }

        if (!data) {
            const error = new Error();
            error.status = 404;
            error.message = `No data found for ${id}`;
            throw error;
        }

        return data;
    }

    async getAll() {
        let data;

        try {
            data = await this.repository.getAll();
        } catch (e) {
            const error = new Error();
            error.status = 501;
            error.message = `An error occurred while getting all data, please contact your sys admin`;
            throw error;
        }

        if (!data) {
            const error = new Error();
            error.status = 404;
            error.message = `No data found`;
        }

        return data;
    }

    async getByName(name) {
        let data;

        if(!name) {
            const error = new Error();
            error.status = 400;
            error.message = `The Name is required field`;
            throw error;
        }

        try {
            data = await this.repository.getByName(name);
        } catch (e) {
            const error = new Error();
            error.status = 501;
            error.message = `An error occurred while getting by '${name}', please contact your sys admin`;
            throw error;
        }

        if(!data) {
            const error = new Error();
            error.status = 404;
            error.message = `No data found for ${name}`;
            throw error;
        }

        return data;
    }

    async getByState(state) {
        let data;
        if(!state) {
            const error = new Error();
            error.status = 400;
            error.message = `The State is required field`;
            throw error;
        }

        try {
            data = await this.repository.getByState(state);
        } catch (e) {
            const error = new Error();
            error.status = 501;
            error.message = `An error occurred while getting by '${state}', please contact your sys admin`;
            throw error;
        }

        if(!data) {
            const error = new Error();
            error.status = 404;
            error.message = `No data found for ${state}`;
            throw error;
        }

        return data;
    }

    async create(object) {
        if(!object) {
            const error = new Error();
            error.status = 400;
            error.message = `Need value to create the record`;
            throw error;
        }

        try {
            return this.repository.create(object);
        } catch (e) {
            const error = new Error();
            error.status = 401;
            error.message = `An error occurred while creating record: ${e.message}`;
            throw error;
        }
    }

    async update(id, object) {
        if(!id || !object) {
            const error = new Error();
            error.status = 400;
            error.message = `Id or a field is missed, please validate`;
            throw error;
        }

        try {
            return this.repository.update(id, object);
        } catch (e) {
            const error = new Error();
            error.status = 401;
            error.message = `An error occurred while updating record: ${e.message}`;
            throw error;
        }


    }

    async delete(id) {
        if (!id) {
            const error = new Error();
            error.status = 400;
            error.message = `The ID is required field`;
            throw error;
        }

        try {
            return this.repository.delete(id);
        } catch (e) {
            const error = new Error();
            error.status = 401;
            error.message = `An error occurred while deleting record: ${e.message}`;
            throw error;
        }
    }
}

module.exports = BaseService;