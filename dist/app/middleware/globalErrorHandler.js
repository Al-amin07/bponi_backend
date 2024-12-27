"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res, next) => {
    const statusCode = 500;
    const message = 'Somwthing went wrong';
    return res.json({
        success: false,
        message,
        statusCode,
        error: err,
    });
};
exports.default = globalErrorHandler;
