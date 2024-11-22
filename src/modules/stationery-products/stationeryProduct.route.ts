import express from "express";
import { createStationeryProductController } from "./stationeryProduct.controller";
const router = express.Router();
router.post(
  "/create-stationery-product",
  createStationeryProductController.createStationeryProduct
);

export const StationeryProductRoute = router;
