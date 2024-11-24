"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationeryProductRoute = void 0;
const express_1 = __importDefault(require("express"));
const stationeryProduct_controller_1 = require("./stationeryProduct.controller");
const router = express_1.default.Router();
router.post("/create-stationery-product", stationeryProduct_controller_1.createStationeryProductController.createStationeryProduct);
router.get("/", stationeryProduct_controller_1.createStationeryProductController.getStationeryProduct);
router.get("/:productId", stationeryProduct_controller_1.createStationeryProductController.getSingleProduct);
router.put("/:productId", stationeryProduct_controller_1.createStationeryProductController.updateProduct);
router.delete("/:productId", stationeryProduct_controller_1.createStationeryProductController.deleteProduct);
exports.StationeryProductRoute = router;
