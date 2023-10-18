const { Model, DataTypes, Sequelize } = require("sequelize");

const CATEGORY_TABLE = 'categories'

const CategorySchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING(512)
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
}

class Category extends Model {
    static assciate(models) {
        this.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'categoryId'
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CATEGORY_TABLE,
            modelName: 'Category',
            timestamps: false
        }
    }
}

module.exports = {
    CategorySchema,
    CATEGORY_TABLE,
    Category
}
