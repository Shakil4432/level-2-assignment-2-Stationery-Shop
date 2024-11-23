import express from "express";
import { createStationeryProductController } from "./stationeryProduct.controller";
const router = express.Router();
router.post(
  "/create-stationery-product",
  createStationeryProductController.createStationeryProduct
);
router.get("/", createStationeryProductController.getStationeryProduct);
router.get("/:productId", createStationeryProductController.getSingleProduct);
router.put("/:productId", createStationeryProductController.updateProduct);
router.delete("/:productId", createStationeryProductController.deleteProduct);
export const StationeryProductRoute = router;
