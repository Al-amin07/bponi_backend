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
exports.RestaurentControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const restaurent_service_1 = require("./restaurent.service");
const getAllRestaurent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield restaurent_service_1.RestaurentServices.getAllRestaurentFromDB(req.query);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'All restaurent retrived successfullly!!!',
        data: result,
    });
}));
const getSingleRestaurent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield restaurent_service_1.RestaurentServices.getSingleRestaurentFromDB(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Restaurent retrived successfullly!!!',
        data: result,
    });
}));
const updateRestaurent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield restaurent_service_1.RestaurentServices.updateRestaurentFromDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Restaurent updated successfullly!!!',
        data: result,
    });
}));
exports.RestaurentControllers = {
    getAllRestaurent,
    getSingleRestaurent,
    updateRestaurent,
};
