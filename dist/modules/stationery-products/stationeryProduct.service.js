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
Object.defineProperty(exports, "__esModule", { value: true });
exports.stationeryProductServices = void 0;
const stationery_product_model_1 = require("./stationery_product.model");
const createStationeryProductDB = (stationeryProduct) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stationery_product_model_1.StationeryProductModel.create(stationeryProduct);
    return result;
});
const getProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stationery_product_model_1.StationeryProductModel.find();
    return result;
});
const getSingleProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stationery_product_model_1.StationeryProductModel.findById(productId);
    return result;
});
const updateProductIntoDB = (productId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stationery_product_model_1.StationeryProductModel.findByIdAndUpdate(productId, data, { new: true });
    return result;
});
const deleteProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stationery_product_model_1.StationeryProductModel.findByIdAndDelete(productId);
    return result;
});
exports.stationeryProductServices = {
    createStationeryProductDB,
    getProductsFromDB,
    getSingleProductFromDB,
    updateProductIntoDB,
    deleteProductFromDB,
};
