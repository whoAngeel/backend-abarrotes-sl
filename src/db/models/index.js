const { PRODUCT_TABLE, Product, productSchema } = require('./product.model');

function setupModels(sequelize) {
    Product.init(productSchema, Product.cofig(sequelize))
}

module.exports = setupModels
