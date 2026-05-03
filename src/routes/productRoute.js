import express from "express";
import { createProduct, deleteProduct, editProduct, getFlashSalesProducts, getProductByCategory, getProductById, getProducts } from "../controllers/productController.js";
import { jwtMiddleware } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const routeProduct = express.Router();

routeProduct.get('/', jwtMiddleware, getProducts);
routeProduct.get('/flash-sales', getFlashSalesProducts);
routeProduct.post('/', jwtMiddleware, upload.single('image'), createProduct);
routeProduct.put('/:id', jwtMiddleware, upload.single('image'), editProduct);
routeProduct.delete('/:id', jwtMiddleware, upload.single('image'), deleteProduct);
routeProduct.get('/:id', jwtMiddleware, getProductById)
routeProduct.get('/category/:id', jwtMiddleware, getProductByCategory)
routeProduct.get("/owned", jwtMiddleware, getOwnedProducts);

export default routeProduct;