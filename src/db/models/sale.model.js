const { Model, DataTypes, Sequelize } = require("sequelize");
const { EMPLOYEE_TABLE } = require("./employee.model");

const SALE_TABLE = 'sales'

const SaleSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    employeeId: {
        allowNull: false,
        field: 'employee_id',
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: EMPLOYEE_TABLE,
            key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    total: {
        type: DataTypes.VIRTUAL,
        get() {
            if (this.items?.length > 0) {
                return this.items.reduce((total, item) => {
                    return total + (item.salePrice * item.SaleProduct.amount)
                }, 0)
            }
            return 0
        }
    }
}

class Sale extends Model {
    static associate(models) {
        this.belongsTo(models.Employee, {
            as: 'employee'
        });
        this.belongsToMany(models.Product, {
            as: 'items',
            through: models.SaleProduct,
            foreignKey: 'saleId',
            otherKey: 'productId'
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: SALE_TABLE,
            modelname: 'Sale',
            timestamps: false
        }
    }
}
module.exports = {
    Sale,
    SaleSchema,
    SALE_TABLE
}
