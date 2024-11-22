import express, { Request, Response } from "express";
import { StationeryProductRoute } from "./modules/stationery-products/stationeryProduct.route";
const app = express();

app.use(express.json());

app.use("/api/products", StationeryProductRoute);
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello, World!" });
});

export default app;
