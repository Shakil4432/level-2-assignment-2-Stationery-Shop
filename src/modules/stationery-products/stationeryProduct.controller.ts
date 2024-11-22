import { Request, Response } from "express";
import { stationeryProductServices } from "./stationeryProduct.service";

const createStationeryProduct = async (req: Request, res: Response) => {
  const stationeryProduct = req.body;
  console.log(stationeryProduct);

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
    console.log(error);
    res.status(500).json({
      message: "Validation failed",
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

export const createStationeryProductController = {
  createStationeryProduct,
};
