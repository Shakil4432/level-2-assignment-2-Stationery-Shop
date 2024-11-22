import { model, Schema } from "mongoose";
import { Stationery_product } from "./stationery-product.interface";
import { timeStamp } from "console";

const stationeryProductSchema = new Schema<Stationery_product>(
  {
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
  },
  { timestamps: true }
);

export const StationeryProductModel = model<Stationery_product>(
  "StationeryProduct",
  stationeryProductSchema
);
