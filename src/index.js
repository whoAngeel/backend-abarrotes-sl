const express = require('express');
const debug = require('debug')("api:index");
const cors = require('cors');
const morgan = require('morgan');

const app = express()

// MIDLEWARES
app.use(cors());
app.use(morgan("dev"))

app.get('', (req, res) => {
    res.send("Hola mundo");
})

app.listen(3000, () => {
    debug("Servidor ejecutandose en http://localhost:3000")
})
