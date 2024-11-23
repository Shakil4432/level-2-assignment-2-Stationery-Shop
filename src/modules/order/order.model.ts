import { model, Schema } from "mongoose";
import { Order } from "./order.interface";
import { StationeryProductModel } from "../stationery-products/stationery_product.model";

const OrderSchema = new Schema<Order>(
  {
    email: {
      type: String,
      required: [true, "Customer email is required"],
      validate: {
        validator: function (email: string) {
          return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
        },
        message: "Please enter a valid email address",
      },
      immutable: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      required: [true, "Product is required"],
      ref: "StationeryProduct",
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [1, "Quantity must be a positive number"],
    },
    totalPrice: { type: Number, required: [true, "Total price is required"] },
  },
  { timestamps: true }
);

OrderSchema.pre("save", async function (next) {
  const StationeryProductModel = model("StationeryProduct");
  const product = await StationeryProductModel.findById(this.product);

  const productPrice: any = product?.price;
  this.totalPrice = productPrice * this.quantity;
  next();
});

export const OrderModel = model<Order>("Order", OrderSchema);
