const { Model, DataTypes, Sequelize } = require("sequelize");

const PRODUCT_TABLE = 'products'

const ProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    purchasePrice: {
        allowNull: false,
        type: DataTypes.DECIMAL(5, 2),
        field: 'purchase_price'
    },
    salePrice: {
        allowNull: false,
        type: DataTypes.DOUBLE,
        field: 'sale_price'
    },
    description: {
        type: DataTypes.STRING,
    },
    barCode: {
        type: DataTypes.STRING,
        unique: true,
        field: 'bar_code'
    },
    imgUrl: {
        type: DataTypes.STRING,
        field: 'img_url',
    },
    stock: {
        type: DataTypes.INTEGER
    },
    brand: {
        type: DataTypes.STRING,
    },
    idProvider: {
        type: DataTypes.INTEGER,
        field: 'id_provider',
        allowNull: false,
    },
    idCategory: {
        type: DataTypes.INTEGER,
        field: 'id_category',
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
}

class Product extends Model {
    // para definir las asociaciones
    static associate() {
        // models
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: "Product",
            timestamps: false
        }
    }
}

module.exports = {
    PRODUCT_TABLE,
    ProductSchema,
    Product
}
