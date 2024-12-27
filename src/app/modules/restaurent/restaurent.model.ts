import mongoose from 'mongoose';

const ReviewsSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  count: { type: Number, required: true },
});

const ItemsSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  isAvailable: { type: Boolean, required: true },
  weight: { type: String, required: true },
});

const MenuSchema = new mongoose.Schema({
  category: { type: String, required: true },
  items: { type: [ItemsSchema], required: true },
});

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  deliveryTime: { type: String, required: true },
  reviews: { type: ReviewsSchema, required: true },
  image: { type: String, required: true },
  menu: { type: [MenuSchema], required: true },
});

export const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
