const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ProductsService {

    constructor() {

    }

    async create(data) {
        const newProduct = await models.Product.create(data, {
            include: ['category', 'provider']
        })
        return newProduct
    }

    async update(id, changes) {
        // if(!product)
        const product = this.findOne(id)
        const newProd = await product.update(changes)
        return newProd
    }
    async delete(id) {
        const producto = this.findOne(id)
        await producto.destroy();
        return {
            message: "Producto eliminado"
        }
    }
    async findOne(id) {
        const product = await models.Product.findByPk(id, {
            include: ['category', 'provider']
        })
        if (!product) {
            throw boom.notFound("Producto no encontrado")
        }
        return product
    }
    async findAll() {
        const products = await models.Product.findAll({
            include: ['category', 'provider']
        })
        return products
    }
}

module.exports = ProductsService
