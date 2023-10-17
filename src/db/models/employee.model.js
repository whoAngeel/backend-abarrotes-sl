const { Model, DataTypes, Sequelize } = require("sequelize");
const { USER_TABLE } = require("./user.model");

const EMPLOYEE_TABLE = 'employees'

const EmployeeSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    rfc: {
        type: DataTypes.STRING(13),
        unique: true,
    },
    curp: {
        type: DataTypes.STRING(18),
        unique: true
    },
    fullname: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING
    },
    salary: {
        type: DataTypes.DECIMAL(5, 2)
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }

}

class Employee extends Model {
    static associate(models) {
        this.belongsTo(models.User, {
            as: 'user'
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: EMPLOYEE_TABLE,
            modelName: "Employee",
            timestamps: false
        }
    }
}

module.exports = {
    EmployeeSchema,
    EMPLOYEE_TABLE,
    Employee
}
