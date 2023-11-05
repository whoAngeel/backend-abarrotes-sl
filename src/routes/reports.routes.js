const { Router } = require("express");
const validatorHandler = require('../middlewares/validator.handler');
const { queryReportSchema } = require('../schemas/reports.schema');
const { checkRoles } = require("../middlewares/auth.handler");
const passport = require("passport");

const router = Router()

router.get('/',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(queryReportSchema, 'body'), async (req, res, next) => {
    try {
        res.status(201).json("Oa")
    } catch (error) {
        next(error)
    }
})

module.exports = router
