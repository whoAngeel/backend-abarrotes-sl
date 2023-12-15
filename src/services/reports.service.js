const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { Op } = require('sequelize');
const debug = require('debug')("api:products-service");

class ReportService {
    constructor() { }

    async perMonth(query) {
        const { year, month } = query;
        const stringDate = `${year}-${month}-`
        const date = new Date(stringDate)
        const iso = date.toISOString()

        try {
            const sales = await models.Sale.findAll({
                where: {
                    createdAt: {
                        [Op.gte]: iso,
                        [Op.lt]: new Date(date.setMonth(date.getMonth() + 1)).toISOString()
                    }
                },
                include: ['items', 'employee']
            });

            return sales;
        } catch (error) {
            throw boom.boomify(error);
        }
    }

    async porDia(query) {
        const { year, month, day } = query;
        const stringDate = `${year}-${month}-${day}`
        const date = new Date(stringDate)
        const iso = date.toISOString()

        try {
            const sales = await models.Sale.findAll({
                where: {
                    createdAt: {
                        [Op.gte]: iso,
                        [Op.lt]: new Date(date.setMonth(date.getMonth() + 1)).toISOString()
                    }
                },
                include: ['items', 'employee']
            });

            return sales;
        } catch (error) {
            throw boom.boomify(error);
        }
    }

    async perDay(query) {
        const { year, month, day } = query;
        const stringDate = `${year}-${month}-${day}`;
        const date = new Date(stringDate);
        const iso = date.toISOString();

        try {
            const sales = await models.Sale.findAll({
                where: {
                    createdAt: {
                        [Op.gte]: iso,
                        [Op.lt]: new Date(date.setDate(date.getDate() + 1)).toISOString()
                    }
                },
                include: ['items', 'employee']
            });

            return sales;
        } catch (error) {
            throw boom.boomify(error);
        }
    }

}

module.exports = ReportService
