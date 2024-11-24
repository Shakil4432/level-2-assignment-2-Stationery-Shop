"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stationeryProduct_route_1 = require("./modules/stationery-products/stationeryProduct.route");
const order_route_1 = require("./modules/order/order.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/products", stationeryProduct_route_1.StationeryProductRoute);
app.use("/api/orders", order_route_1.OrderRoute);
app.get("/", (req, res) => {
    res.json({ message: "Hello, World!" });
});
exports.default = app;
