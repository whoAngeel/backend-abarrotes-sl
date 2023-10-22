const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const sequelize = require('../libs/sequelize');
const debug = require('debug')("api:products-service");
const { Transaction } = require('sequelize');


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

    async addItem(data){
        const t = await sequelize.transaction({ isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED});
        try {
            const { productId, amount } = data;
            const product = await models.Product.findByPk(productId, {t});
            if (!product) throw boom.notFound("Producto no encontrado");
            if ((product.stock - amount) >= 1) {
                product.stock = product.stock - amount;
                debug("Sí se puede vender: ", product.stock, " <-Nueva existencia");
                await product.save();
                const newItem = await models.SaleProduct.create(data);
                if(!newItem) throw boom.badImplementation("No se pudo agregar el producto a la venta");
                await t.commit();
                return newItem;
            }else{
                throw boom.badRequest("No hay suficiente stock para realizar la venta");
            }
        } catch (error) {
            await t.rollback();
            throw boom.badImplementation("Error", error)
        }
    }

    // todo

    async update(id, changes) {// no se va a poder actualizar una venta
        return { id, changes }
    }

    async delete(id) {// no se va a poder eliminar una venta
        return { id }
    }

}

module.exports = SalesService
