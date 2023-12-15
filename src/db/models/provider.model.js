const { Model, DataTypes, Sequelize } = require("sequelize");

const PROVIDER_TABLE = 'providers'

const ProviderSchame = {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    provFirstname: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "provider_firstname"
    },
    provLastname: {
        type: DataTypes.STRING,
        field: "provider_lastname"
    },
    provPhone: {
        type: DataTypes.STRING,
        field: "provider_phone"
    },
    provEmail: {
        type: DataTypes.STRING,
        field: "provider_email"
    },
    companyName: {
        type: DataTypes.STRING,
        field: "company_name"
    },
    companyAddress: {
        type: DataTypes.STRING,
        field: "company_address"
    },
    companyPhone: {
        type: DataTypes.STRING(10),
        field: "company_phone",
    },
    companyEmail: {
        type: DataTypes.STRING,
        field: "company_email"
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


/*
proveedor: {
    {id: number,
    datosPersonales:{
        firstname: string,
        lastname: string,
        phone: string,
        email: string,
    },
    datosEmpresa: {
        name: string,
        address: string,
        phone: string,
        email: string
    },}
}
*/
