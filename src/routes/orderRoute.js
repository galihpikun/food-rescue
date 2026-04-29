import express from "express";
import { createOrder } from "../controllers/orderController";
import { jwtMiddleware } from "../middlewares/authMiddleware";

const routeOrder = express.Router();

routeOrder.post('/', jwtMiddleware, createOrder);

export default routeOrder;