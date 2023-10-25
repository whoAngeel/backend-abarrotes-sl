const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class InventoryService {

    constructor() {}

    async findBy(data) {
        if ('id' in data) {
            // Buscar por id
            const product = await models.Product.findByPk(data.id, {
                include: ['category', 'provider']
            });
            if (!product) {
                throw boom.notFound("Producto no encontrado");
            }
            return product;
        }else if('barCode' in data){
            // Buscar por codigo de barras
            const products = await models.Product.findAll({
                where: {
                    barCode: data.barCode
                },
                include: ['category', 'provider']
            });
            return products;
        } else {
            throw boom.badRequest("Debe proporcionar un id o un nombre para buscar el producto");
        }
    }
    async update(data) {
        const product = await this.findBy(data);
        if (product) {
            await product.update({ ...data, id: undefined });
            return product;
        } else {
            throw boom.notFound("Producto no encontrado");
        }
    }

}

module.exports = InventoryService