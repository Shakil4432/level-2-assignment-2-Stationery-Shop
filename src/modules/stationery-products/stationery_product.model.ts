import { model, Schema } from 'mongoose';
import { Stationery_product } from './stationery-product.interface';

const stationeryProductSchema = new Schema<Stationery_product>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: [
      'Writing',
      'Office Supplies',
      'Art Supplies',
      'Educational',
      'Technology',
    ],
    required: true,
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

export const StationeryProductModel = model<Stationery_product>(
  'StationeryProduct',
  stationeryProductSchema,
);
