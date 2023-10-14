const express = require('express');

const router = express.Router()

router.get('/', (req, res) => {
    const products = [];
    res.json(products)
})

module.exports = router
