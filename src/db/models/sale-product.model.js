const { Model, DataTypes, Sequelize } = require("sequelize");
const { SALE_TABLE } = require("./sale.model");
const { PRODUCT_TABLE } = require("./product.model");
const SALE_PRODUCT_TABLE = 'sale_product'

const SaleProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    amount: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    saleId: {
        field: 'sale_id',
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: SALE_TABLE,
            key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: 'RESTRICT'
    },
    productId: {
        field: 'product_id',
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: PRODUCT_TABLE,
            key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: 'RESTRICT'
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
}

class SaleProduct extends Model {
    static associate() {

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: SALE_PRODUCT_TABLE,
            modelName: "SaleProduct",
            timestamps: false
        }
    }
}


module.exports = {
    SaleProduct,
    SALE_PRODUCT_TABLE,
    SaleProductSchema
}
