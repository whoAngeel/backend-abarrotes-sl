const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class SalesService {
    constructor() { }

    async find() { // TODO: cambiar
        return await models.Sale.findAll()
    }

    async create(data) {
        const newSale = await models.Sale.create(data)
        return newSale
    }
    async findOne(id) {
        const sale = await models.Sale.findByPk(id, {
            include: [{
                association: 'employee',
                include: ['user']
            }, 'items'],
        })
        if (!sale) throw boom.notFound("Venta no encontrada")
        return sale
    }

    async addItem(data) {
        const newItem = await models.SaleProduct.create(data)
        return newItem
    }

    async update(id, changes) {// no se va a poder actualizar una venta
        return { id, changes }
    }

    async delete(id) {// no se va a poder eliminar una venta
        return { id }
    }
}

module.exports = SalesService
