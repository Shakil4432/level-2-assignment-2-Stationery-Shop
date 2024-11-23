import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { OrderModel } from "./order.model";

const createOrder = async (req: Request, res: Response) => {
  const order = req.body;

  try {
    const result = await OrderServices.createOrderIntoDB(order);
    res.status(200).json({
      message: "Order created successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Error creating order",
      status: false,
      error: error,
    });
  }
};

const totalRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderModel.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalPrice" },
        },
      },
    ]);

    res.status(200).json({
      message: "Revenue calculated successfully",
      status: true,
      data: {
        totalRevenue: result[0].totalRevenue,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching total revenue",
      status: false,
      error: error,
    });
  }
};
export const OrderController = {
  createOrder,
  totalRevenue,
};
