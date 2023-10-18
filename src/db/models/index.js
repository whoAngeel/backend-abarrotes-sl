const { Product, ProductSchema } = require('./product.model');
const { Category, CategorySchema } = require('./category.model');
const { Provider, ProviderSchame } = require('./provider.model');
const { User, UsersSchema } = require('./user.model');
const { Employee, EmployeeSchema } = require('./employee.model');
const { Sale, SaleSchema } = require('./sale.model');
function setupModels(sequelize) {
    Product.init(ProductSchema, Product.config(sequelize))
    Category.init(CategorySchema, Category.config(sequelize))
    Provider.init(ProviderSchame, Provider.config(sequelize))
    User.init(UsersSchema, User.config(sequelize))
    Sale.init(SaleSchema, Sale.config(sequelize));
    Employee.init(EmployeeSchema, Employee.config(sequelize))

    User.associate(sequelize.models)
    Employee.associate(sequelize.models)
    Category.assciate(sequelize.models)
    Provider.associate(sequelize.models)
    Sale.associate(sequelize.models)

}

module.exports = setupModels
