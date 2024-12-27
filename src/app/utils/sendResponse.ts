import { Response } from 'express';
import { TData } from '../modules/restaurent/restaurent.interface';

const sendResponse = (res: Response, data: TData) => {
  return res.json({
    success: true,
    message: data?.message,
    data: data?.data,
  });
};

export default sendResponse;
