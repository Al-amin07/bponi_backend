import QueryBuilder from '../../query/QueryBuilder';
import { TRestaurent } from './restaurent.interface';
import { Restaurant } from './restaurent.model';

const getAllRestaurentFromDB = async (query: Record<string, unknown>) => {
  // const result = await Restaurant.find({});
  const restaurentQuery = new QueryBuilder(Restaurant.find(), query)
    .search([
      'name',
      'menu.category',
      'menu.item.names',
      'menu.items.description',
    ])
    .limit();
  const result = await restaurentQuery.modelQuery;
  return result;
};

const getSingleRestaurentFromDB = async (id: string) => {
  const result = await Restaurant.findById(id);
  return result;
};
const updateRestaurentFromDB = async (
  id: string,
  payload: Partial<TRestaurent>,
) => {
  const result = await Restaurant.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const RestaurentServices = {
  getAllRestaurentFromDB,
  getSingleRestaurentFromDB,
  updateRestaurentFromDB,
};
