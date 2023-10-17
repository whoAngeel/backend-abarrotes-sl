const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class EmployeesService {
    constructor() { }

    async findAll() {
        return await models.Employee.findAll()
    }

    async create(data) {
        const newEmployee = await models.Employee.create(data)
        return newEmployee
    }

    async findOne(id) {
        const employee = await models.Employee.findByPk(id)
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
