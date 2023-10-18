const { Model, DataTypes, Sequelize } = require("sequelize");

const PROVIDER_TABLE = 'providers'

const ProviderSchame = {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
}

class Provider extends Model {
    static associate(models) {
        this.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'providerId'
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PROVIDER_TABLE,
            modelName: "Provider",
            timestamps: false
        }
    }
}

module.exports = {
    ProviderSchame,
    PROVIDER_TABLE,
    Provider
}
