"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurentServices = void 0;
const QueryBuilder_1 = __importDefault(require("../../query/QueryBuilder"));
const restaurent_model_1 = require("./restaurent.model");
const getAllRestaurentFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    // const result = await Restaurant.find({});
    const restaurentQuery = new QueryBuilder_1.default(restaurent_model_1.Restaurant.find(), query)
        .search([
        'name',
        'menu.category',
        'menu.item.names',
        'menu.items.description',
    ])
        .limit();
    const result = yield restaurentQuery.modelQuery;
    return result;
});
const getSingleRestaurentFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield restaurent_model_1.Restaurant.findById(id);
    return result;
});
const updateRestaurentFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield restaurent_model_1.Restaurant.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
exports.RestaurentServices = {
    getAllRestaurentFromDB,
    getSingleRestaurentFromDB,
    updateRestaurentFromDB,
};
