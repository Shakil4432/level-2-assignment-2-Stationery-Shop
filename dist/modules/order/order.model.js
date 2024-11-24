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
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, "Customer email is required"],
        validate: {
            validator: function (email) {
                return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
            },
            message: "Please enter a valid email address",
        },
        immutable: true,
    },
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "Product is required"],
        ref: "StationeryProduct",
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [1, "Quantity must be a positive number"],
    },
    totalPrice: { type: Number, required: [true, "Total price is required"] },
}, { timestamps: true });
OrderSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const StationeryProductModel = (0, mongoose_1.model)("StationeryProduct");
        const product = yield StationeryProductModel.findById(this.product);
        const productPrice = product === null || product === void 0 ? void 0 : product.price;
        this.totalPrice = productPrice * this.quantity;
        next();
    });
});
exports.OrderModel = (0, mongoose_1.model)("Order", OrderSchema);
