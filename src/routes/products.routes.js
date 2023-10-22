const express = require('express');
const ProductsService = require('../services/product.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createProductSchema, getProductSchema, updateProductSchema, queryProductSchema } = require('../schemas/product.schema');
const passport = require('passport');
const { checkRoles } = require('../middlewares/auth.handler');
const debug = require('debug')("api:products.router");

const router = express.Router()
const service = new ProductsService()

router.get('/', validatorHandler(queryProductSchema, 'query'), async (req, res, next) => {
    try {
        const products = await service.findAll(req.query);
        res.json(products)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', validatorHandler(getProductSchema, 'params'), async (req, res, next) => {
    try {
        const id = req.params.id
        res.json({
            message: 'endpoint para obtener un producto por id: ' + id
        })
    } catch (error) {
        next(error)
    }
})

router.post('/',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(createProductSchema, 'body'), async (req, res, next) => {
        try {
            const body = req.body;
            const newProduct = await service.create(body)
            res.status(201).json(newProduct)
        } catch (error) {
            next(error)
        }
    })

router.patch('/:id', validatorHandler(getProductSchema, 'params'), validatorHandler(updateProductSchema, 'body'), async (req, res, next) => {
    try {
        res.json({
            message: 'ruta para editar un producto'
        })
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', validatorHandler(getProductSchema, 'params'), async (req, res, next) => {
    try {
        res.json({
            message: "eliminar producto"
        })
    } catch (error) {
        next(error)
    }
})

module.exports = router
