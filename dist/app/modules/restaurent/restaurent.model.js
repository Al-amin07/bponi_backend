"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ReviewsSchema = new mongoose_1.default.Schema({
    rating: { type: Number, required: true },
    count: { type: Number, required: true },
});
const ItemsSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    isAvailable: { type: Boolean, required: true },
    weight: { type: String, required: true },
});
const MenuSchema = new mongoose_1.default.Schema({
    category: { type: String, required: true },
    items: { type: [ItemsSchema], required: true },
});
const RestaurantSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    deliveryTime: { type: String, required: true },
    reviews: { type: ReviewsSchema, required: true },
    image: { type: String, required: true },
    menu: { type: [MenuSchema], required: true },
});
exports.Restaurant = mongoose_1.default.model('Restaurant', RestaurantSchema);
