const express = require('express');
const debug = require('debug')("api:index");
const cors = require('cors');
const morgan = require('morgan');
const routerApi = require('./routes')

const app = express()

// MIDLEWARES
app.use(cors());
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// ROUTES
app.get('/', (req, res) => {
    res.send("Servidor");
})
routerApi(app)

app.listen(3000, () => {
    debug("Servidor ejecutandose en http://localhost:3000")
})
