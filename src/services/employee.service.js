const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const bcrypt = require('bcrypt');
const debug = require('debug')('api:employee.service');

class EmployeesService {
    constructor() { }

    async findAll() {
        const employees = await models.Employee.findAll({
            include: ['user']
        })

        const employeesWithoutAdminUser = employees.filter(employee => {
            return !employee.user || (employee.user.role !== 'admin');
        });

        const employeesWithoutPassword = employeesWithoutAdminUser.map(employee => {
            if (employee.user) {
                const employeeJSON = employee.toJSON(); // Convierte el objeto Sequelize a JSON
                const { user, ...employeeWithoutPassword } = employeeJSON;
                return {
                    ...employeeWithoutPassword,
                    user: {
                        id: user.id,
                        username: user.username,
                        role: user.role,
                        createdAt: user.createdAt,
                    }
                };
            }
            return employee;
        });

        return employeesWithoutPassword;

    }

    async create(data) {
        const hash = await bcrypt.hash(data.user.password, 10)
        const newData = {
            ...data,
            user: {
                ...data.user,
                password: hash
            }
        }
        const newEmployee = await models.Employee.create(newData, {
            include: ['user']
        })
        const employeeWithoutPassword = newEmployee.toJSON();
        if (employeeWithoutPassword.user) {
            delete employeeWithoutPassword.user.password;
        }

        return {
            message: "Empleado y usuario creado correctamente",
            employee: employeeWithoutPassword,
        }
    }

    async findOne(id) {
        const employee = await models.Employee.findByPk(id, {
            include: ['user']
        })
        if (!employee) { throw boom.notFound('Empleado no encontrado') }
        return employee;
    }

    async update(id, changes) {
        const employee = this.findOne(id);
        const newEmployee = (await employee).update(changes)
        return {
            message: "Empleado Acutalizado",
            employee: newEmployee
        }
    }

    async delete(id) {
        const employee = this.findOne(id);
        (await employee).destroy()

        return {
            message: "Empleado eliminado",
            id: employee.id
        }
    }
}
module.exports = EmployeesService
