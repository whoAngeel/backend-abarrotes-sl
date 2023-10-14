const express = require('express');
const ProductsService = require('../services/product.service');

const router = express.Router()
const service = new ProductsService()

router.get('/', (req, res, next) => {
    const products = [];
    res.json(products)
})

router.get('/:product', (req, res, next) => {
    try {
        const prod = service.findOne(23)
        console.log(prod);
        res.send('obtener producto por id')
    } catch (error) {
        next(error)
    }
})

router.post('/', (req, res, next) => {
    try {
        res.send('crear producto')
    } catch (error) {
        next(error)
    }
})

router.patch('/:product', (req, res, next) => {
    try {
        res.send('ruta para editar un producto')
    } catch (error) {
        next(error)
    }
})

router.delete('/:product', (req, res, next) => {
    res.send("eliminar producto")
})

module.exports = router
