const { Router } = require("express");
const validatorHandler = require('../middlewares/validator.handler');
const { createCategorySchema, getCategorySchema, updateCategorySchema } = require('../schemas/category.schema');
const CategoriesService = require('../services/category.service');

const router = Router()
const service = new CategoriesService()

// TODO hacer la logica de las categorias
router.get('/',
    async (req, res, next) => {
        try {
            const categories = await service.findAll()
            res.status(200).json(categories)

        } catch (error) {
            next(error)
        }
    })

router.get('/:id',
    validatorHandler(getCategorySchema, 'params'),
    async (req, res, next) => {
        try {

        } catch (error) {
            next(error)
        }
    })


router.post('/', validatorHandler(createCategorySchema, 'body'),
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
    validatorHandler(getCategorySchema, 'params'),
    validatorHandler(updateCategorySchema, 'body'),
    async (req, res, next) => {
        try {

        } catch (error) {
            next(error)
        }
    })

router.delete('/:id',
    validatorHandler(getCategorySchema, 'params'),
    async (req, res, next) => {
        try {

        } catch (error) {
            next(error)
        }
    })
module.exports = router
