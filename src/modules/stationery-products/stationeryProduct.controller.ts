import { Request, Response } from 'express';
import { stationeryProductServices } from './stationeryProduct.service';

const createStationeryProduct = async (req: Request, res: Response) => {
  const stationeryProduct = req.body;

  try {
    const result =
      await stationeryProductServices.createStationeryProductDB(
        stationeryProduct,
      );
    res.status(201).json({
      message: 'Stationery product created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createStationeryProductController = {
  createStationeryProduct,
};
