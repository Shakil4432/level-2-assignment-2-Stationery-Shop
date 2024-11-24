"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationeryProductModel = void 0;
const mongoose_1 = require("mongoose");
const stationeryProductSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, "Please enter a name"] },
    brand: { type: String, required: [true, "Please enter a brand name"] },
    price: {
        type: Number,
        required: [true, "Please enter product price"],
        min: [0, "Price must be a positive number"],
    },
    category: {
        type: String,
        enum: [
            "Writing",
            "Office Supplies",
            "Art Supplies",
            "Educational",
            "Technology",
        ],
        required: [true, "Please enter a category"],
    },
    description: {
        type: String,
        required: [true, "Please enter product details"],
    },
    quantity: {
        type: Number,
        min: [0, "Quantity must be a positive number"],
        required: true,
    },
    inStock: { type: Boolean, required: true },
}, { timestamps: true });
exports.StationeryProductModel = (0, mongoose_1.model)("StationeryProduct", stationeryProductSchema);
