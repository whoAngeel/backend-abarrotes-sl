const { Router } = require("express");
const validatorHandler = require('../middlewares/validator.handler');
const { createCategorySchema, getCategorySchema, updateCategorySchema } = require('../schemas/category.schema');
const CategoriesService = require('../services/category.service');
const passport = require("passport");
const { checkRoles } = require("../middlewares/auth.handler");

const router = Router()
const service = new CategoriesService()

router.get('/',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin', 'employee'),
    async (req, res, next) => {
        try {
            const { categories, totalCategories } = await service.findAll(req.query)
            res.status(200).json({
                categorias: categories,
                total: totalCategories
            })

        } catch (error) {
            next(error)
        }
    })

router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin', 'employee'),
    validatorHandler(getCategorySchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const category = await service.findOne(id)
            res.json(category)
        } catch (error) {
            next(error)
        }
    })


router.post('/',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(createCategorySchema, 'body'),
    async (req, res, next) => {
        try {
            const data = req.body
            const rta = await service.create(data)
            res.status(200).json(rta)

        } catch (error) {
            next(error)
        }
    })

router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(getCategorySchema, 'params'),
    validatorHandler(updateCategorySchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const changes = req.body
            const rta = await service.update(id, changes)
            res.json(rta)

        } catch (error) {
            next(error)
        }
    })

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(getCategorySchema, 'params'),
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
