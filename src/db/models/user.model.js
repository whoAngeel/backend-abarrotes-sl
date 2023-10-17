const { Model, DataTypes, Sequelize } = require("sequelize");

const USER_TABLE = 'users'

const UsersSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    username: {
        unique: true,
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
}

class User extends Model {
    static associate() { }
    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: "User",
            timestamps: false
        }
    }
}

module.exports = {
    UsersSchema,
    USER_TABLE,
    User
}
