const debug = require('debug')("api:errors-middlware");

function logErrors(error, req, res, next) {
    console.error(error.message)
    next(error)
}

function errorHandler(err, req, res, next) {
    debug(err.message)
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
}

function boomErrorHandler(err, req, res, next) {
    if (err.isBoom) {
        const { output } = err
        res.status(output.statusCode).json(output.payload)
    } else {
        next(err)
    }
}

module.exports = {
    logErrors,
    errorHandler,
    boomErrorHandler
}
