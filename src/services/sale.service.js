const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { Op } = require('sequelize');
const debug = require('debug')('api:sale-service');

class SalesService {
    constructor() { }

    async find() { // TODO: cambiar
        return await models.Sale.findAll({
            include: ['items']
        })
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

    }
    async getTotalSales() {
        try {
            const sales = await models.Sale.findAll({ include: ['items'] });
            const total = sales.reduce(async (acc, sale) => acc + sale.total, 0);
            return total;
        } catch (error) {
            throw boom.badImplementation('Error al calcular el total de las ventas.');
        }
    }

    async update(id, changes) {// no se va a poder actualizar una venta
        return { id, changes }
    }

    async delete(id) {// no se va a poder eliminar una venta
        return { id }
    }

}

module.exports = SalesService
