const { Router } = require("express");
const validatorHandler = require('../middlewares/validator.handler');
const { createEmployeeSchema, getEmployeeSchema, updateEmployeeSchema } = require('../schemas/employee.schema');
const EmployeeService = require('../services/employee.service');
const { checkRoles } = require("../middlewares/auth.handler");
const passport = require("passport");

const router = Router()
const service = new EmployeeService()

router.get('/',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    async (req, res, next) => {
        try {
            const employees = await service.findAll()
            res.json(employees)
        } catch (error) {
            next(error)
        }
    })

router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(getEmployeeSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const employee = await service.findOne(id)
            res.json(employee)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(createEmployeeSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body
            const newUser = await service.create(body)
            res.status(201).json(newUser)
        } catch (error) {
            next(error)
        }
    })

router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(getEmployeeSchema, 'params'),
    validatorHandler(updateEmployeeSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body
            const { id } = req.params
            const rta = await service.update(id, body)
            res.status(200).json(rta)
        } catch (error) {
            next(error)
        }
    })

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(getEmployeeSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const rta = await service.delete(id)
            res.json(rta)
        } catch (error) {
            next(error)
        }
    })

module.exports = router
