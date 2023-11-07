const joi = require('joi');
const month = joi.string().max(255)
const year = joi.string().max(255)
const day = joi.string().max(255)

const queryReportMonthSchema = joi.object({
    month: month.required(),
    year: year.required()
});
const queryReportDaySchema = joi.object({
    month: month.required(),
    year: year.required(),
    day: day.required()
});

module.exports = {
    queryReportDaySchema, queryReportMonthSchema
};
