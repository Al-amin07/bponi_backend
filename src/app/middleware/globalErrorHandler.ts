/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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
