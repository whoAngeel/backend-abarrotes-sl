const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');
const { models } = require('../libs/sequelize');

class ProvidersService {
    constructor() { }
    async create(data) {
        const provider = await models.Provider.create(data)
        return provider
    }

    async update(id, changes) {
        // if(!product)
        const provider = this.findOne(id)
        const newProv = await provider.update(changes)
        return newProv
    }
    async delete(id) {
        const provider = this.findOne(id)
        await provider.destroy();
        return {
            message: "Proveedor eliminado"
        }
    }
    async findOne(id) {
        const provider = await models.Provider.findByPk(id)
        if (!provider) {
            throw boom.notFound("Proveedor no encontrado")
        }
        return provider
    }
    async findAll() {
        const providers = await models.Provider.findAll()
        return providers
    }
}

module.exports = ProvidersService
