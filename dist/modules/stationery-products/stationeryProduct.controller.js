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
exports.createStationeryProductController = void 0;
const stationeryProduct_service_1 = require("./stationeryProduct.service");
const createStationeryProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const stationeryProduct = req.body;
    try {
        const result = yield stationeryProduct_service_1.stationeryProductServices.createStationeryProductDB(stationeryProduct);
        res.status(200).json({
            message: "Stationery Product Created Successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Validation failed",
            success: false,
            error: error,
            stack: error.stack,
        });
    }
});
const getStationeryProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield stationeryProduct_service_1.stationeryProductServices.getProductsFromDB();
        res.status(200).json({
            message: "Products retrieved successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            error: error,
            stack: error.stack,
        });
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    try {
        const result = yield stationeryProduct_service_1.stationeryProductServices.getSingleProductFromDB(productId);
        res.status(200).json({
            message: "Product retrieved successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            error: error,
            stack: error.stack,
        });
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    const data = req.body;
    try {
        const result = yield stationeryProduct_service_1.stationeryProductServices.updateProductIntoDB(productId, data);
        res.status(200).json({
            message: "Product updated successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            error: error,
            stack: error.stack,
        });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    try {
        const result = yield stationeryProduct_service_1.stationeryProductServices.deleteProductFromDB(productId);
        res.status(200).json({
            message: "Product deleted successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            error: error,
            stack: error.stack,
        });
    }
});
exports.createStationeryProductController = {
    createStationeryProduct,
    getStationeryProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};
