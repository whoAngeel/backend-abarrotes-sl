const { Model, DataTypes, Sequelize } = require("sequelize");

const PROVIDER_TABLE = 'providers'

const ProviderSchame = {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
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
    static associate(models) { }

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
