import { Stationery_product } from "./stationery-product.interface";
import { StationeryProductModel } from "./stationery_product.model";

const createStationeryProductDB = async (
  stationeryProduct: Stationery_product
) => {
  const result = await StationeryProductModel.create(stationeryProduct);
  return result;
};

const getProductsFromDB = async () => {
  const result = await StationeryProductModel.find();
  return result;
};

const getSingleProductFromDB = async (productId: string) => {
  const result = await StationeryProductModel.findById(productId);
  return result;
};

const updateProductIntoDB = async (
  productId: string,
  data: Stationery_product
) => {
  const result = await StationeryProductModel.findByIdAndUpdate(
    productId,
    data,
    { new: true }
  );

  return result;
};

const deleteProductFromDB = async (productId: string) => {
  const result = await StationeryProductModel.findByIdAndDelete(productId);
  return result;
};

export const stationeryProductServices = {
  createStationeryProductDB,
  getProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
