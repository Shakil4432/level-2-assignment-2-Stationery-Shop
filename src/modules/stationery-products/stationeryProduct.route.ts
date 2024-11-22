import express from 'express';
import { createStationeryProductController } from './stationeryProduct.controller';
const router = express.Router();
router.get(
  '/create-stationery-product',
  createStationeryProductController.createStationeryProduct,
);
