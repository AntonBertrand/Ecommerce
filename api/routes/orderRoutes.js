import express from "express";
import { getAllOrders, getOrder, createOrder } from "../controllers/ordersController.js";

const router = express.Router();

router.get("/", getAllOrders);
router.get("/:id", getOrder);
router.post("/", createOrder);

export default router;