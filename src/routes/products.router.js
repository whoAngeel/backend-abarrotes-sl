const express = require('express');

const router = express.Router()

router.get('/', (req, res) => {
    const products = [];
    res.json(products)
})

router.get('/:product', (req, res) => {
    res.send('obtener producto por id')
})

router.post('/', (req, res) => {
    res.send('crear producto')
})

router.patch('/:product', (req, res) => {
    res.send('ruta para editar un producto')
})

router.delete('/:product', (req, res) => {
    res.send("eliminar producto")
})

module.exports = router
