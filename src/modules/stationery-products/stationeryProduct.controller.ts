import { Request, Response } from "express";
import { stationeryProductServices } from "./stationeryProduct.service";

const createStationeryProduct = async (req: Request, res: Response) => {
  const stationeryProduct = req.body;

  try {
    const result =
      await stationeryProductServices.createStationeryProductDB(
        stationeryProduct
      );
    res.status(201).json({
      message: "Stationery Product Created Successfully",
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Validation failed",
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

const getStationeryProduct = async (req: Request, res: Response) => {
  try {
    const result = await stationeryProductServices.getProductsFromDB();
    res.status(200).json({
      message: "Products retrieved successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      error: error,
      stack: error.stack,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  try {
    const result =
      await stationeryProductServices.getSingleProductFromDB(productId);

    res.status(200).json({
      message: "Product retrieved successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      error: error,
      stack: error.stack,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const data = req.body;
  try {
    const result = await stationeryProductServices.updateProductIntoDB(
      productId,
      data
    );

    res.status(200).json({
      message: "Product updated successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      error: error,
      stack: error.stack,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  try {
    const result =
      await stationeryProductServices.deleteProductFromDB(productId);

    res.status(200).json({
      message: "Product deleted successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      error: error,
      stack: error.stack,
    });
  }
};

export const createStationeryProductController = {
  createStationeryProduct,
  getStationeryProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
