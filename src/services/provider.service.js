const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');
const { models } = require('../libs/sequelize');
const debug = require('debug')('api:provider-service');

class ProvidersService {
    constructor() { }
    async create(data) {
        const newProv = await models.Provider.create(data)
        return newProv
    }
    async findAll() {
        const providers = await models.Provider.findAll()
        return providers
    }
    async findOne(id) {
        const provider = await models.Provider.findByPk(id)
        if (!provider) throw boom.notFound("Proveedor no encontrada")
        return provider
    }
    async update(id, changes) {
        // if(!product)
        const provider = this.findOne(id)
        const newProv = (await provider).update(changes)
        return newProv
    }
    async delete(id) {
        const provider = this.findOne(id)
        debug(provider);
        (await provider).destroy();
        return {
            message: "Proveedor eliminado"
        }
    }

}

module.exports = ProvidersService
