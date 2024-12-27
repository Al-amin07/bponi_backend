/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next): any => {
  const statusCode = 500;
  const message = 'Somwthing went wrong';
  return res.json({
    success: false,
    message,
    statusCode,
    error: err,
  });
};

export default globalErrorHandler;
