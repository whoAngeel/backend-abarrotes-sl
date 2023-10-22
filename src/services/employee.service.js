const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const bcrypt = require('bcrypt');

class EmployeesService {
    constructor() { }

    async findAll() {
        return await models.Employee.findAll({
            include: ['user']
        })
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
            id: newEmployee.id
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
