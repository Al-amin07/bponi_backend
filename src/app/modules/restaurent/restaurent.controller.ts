import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { RestaurentServices } from './restaurent.service';

const getAllRestaurent = catchAsync(async (req, res) => {
  const result = await RestaurentServices.getAllRestaurentFromDB(req.query);
  sendResponse(res, {
    success: true,
    message: 'All restaurent retrived successfullly!!!',
    data: result,
  });
});
const getSingleRestaurent = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await RestaurentServices.getSingleRestaurentFromDB(id);
  sendResponse(res, {
    success: true,
    message: 'Restaurent retrived successfullly!!!',
    data: result,
  });
});
const updateRestaurent = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await RestaurentServices.updateRestaurentFromDB(id, req.body);
  sendResponse(res, {
    success: true,
    message: 'Restaurent updated successfullly!!!',
    data: result,
  });
});

export const RestaurentControllers = {
  getAllRestaurent,
  getSingleRestaurent,
  updateRestaurent,
};
