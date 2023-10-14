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

module.exports = {
    logErrors,
    errorHandler
}
