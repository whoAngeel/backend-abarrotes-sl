const express = require('express');
const debug = require('debug')("api:index");
const cors = require('cors');
const morgan = require('morgan');
//swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerSpec = require('./swaggerSpec');

const routerApi = require('./routes')
const { errorHandler, logErrors, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');
const { checkApiKey } = require('./middlewares/auth.handler');

const app = express()

// MIDLEWARES
app.use(cors());
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/api/doc", swaggerUI.serve, swaggerUI.setup(swaggerJsdoc(swaggerSpec))) // endpoint  para mostrar la documentacion

require('./utils/auth'); // usar las strategias de passport
// ROUTES
app.get('/', (req, res) => {
    res.send("Servidor");
})

routerApi(app)

// middlewares de errores
app.use(logErrors)
app.use(boomErrorHandler)
app.use(ormErrorHandler)
app.use(errorHandler)

app.listen(3000, () => {
    debug("Servidor ejecutandose en http://localhost:3000")
})
