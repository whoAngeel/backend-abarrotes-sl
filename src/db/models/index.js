const { Product, ProductSchema } = require('./product.model');
const { Category, CategorySchema } = require('./category.model');
const { Provider, ProviderSchame } = require('./provider.model');
const { User, UsersSchema } = require('./user.model');

function setupModels(sequelize) {
    Product.init(ProductSchema, Product.config(sequelize))
    Category.init(CategorySchema, Category.config(sequelize))
    Provider.init(ProviderSchame, Provider.config(sequelize))
    User.init(UsersSchema, User.config(sequelize))

}

module.exports = setupModels
