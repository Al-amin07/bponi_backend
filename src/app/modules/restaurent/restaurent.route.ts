import { Router } from 'express';
import { RestaurentControllers } from './restaurent.controller';

const route = Router();

route.get('/', RestaurentControllers.getAllRestaurent);
route.get('/:id', RestaurentControllers.getSingleRestaurent);
route.patch('/:id', RestaurentControllers.updateRestaurent);

export const RestaurentRoute = route;
