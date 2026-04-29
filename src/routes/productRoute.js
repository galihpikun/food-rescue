import express from "express";
import { createProduct, getFlashSalesProduct } from "../controllers/productController";
import { authMiddleware } from "../middlewares/auth.js";

const routeProduct = express.Router();

routeProduct.get('/flash-sales', getFlashSalesProduct);
routeProduct.post('/', authMiddleware, createProduct);

export default routeProduct;