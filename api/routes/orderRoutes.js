import express from "express";
import { getAllOrders, getOrder, createOrder, getUserOrder } from "../controllers/ordersController.js";

const router = express.Router();

router.get("/", getAllOrders);
router.get("/:id", getOrder);
router.post("/", createOrder);
router.get("/user/:id", getUserOrder);

export default router;