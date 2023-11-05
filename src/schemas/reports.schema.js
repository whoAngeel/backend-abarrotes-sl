const joi = require('joi');

const limit = joi.number().integer();
const offset = joi.number().integer();
const createdAt = joi.string().isoDate();

const queryReportSchema = joi.object({
    offset,
    limit,
});

module.exports = {
    queryReportSchema
};
