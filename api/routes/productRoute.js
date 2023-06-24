import express from 'express'
import { getAllProducts, createProduct, getProduct } from '../controllers/productController.js';

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);

export default router;