const responseVerdicts = require('../constants/response.js');

const errorHandler = (err, req, res, next) => {
    console.error(err);
    const status = err.status || 500;
    const message = err.message || responseVerdicts.INTERNAL_SERVER_ERROR;
    res.status(status).json({
        error: {
            message: message
        }
    });
};

module.exports = errorHandler;
