import mongoose from 'mongoose';
import { Stationery_product } from './stationery-product.interface';
import { StationeryProductModel } from './stationery_product.model';

const createStationeryProductDB = async (
  stationeryProduct: Stationery_product,
) => {
  const result = await StationeryProductModel.create(stationeryProduct);
  return result;
};

export const stationeryProductServices = {
  createStationeryProductDB,
};
