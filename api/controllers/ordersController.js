import express from 'express';
import Orders from '../models/Orders.js';
import mongoose from 'mongoose';

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Orders.find({}).sort({createdAt: -1});
        res.status(200).json(orders);
    } catch(err) {
        res.status(400).json({error: "Error gathering data"})
    }
}

export const getOrder = async (req, res) => {

    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Order does not exist'});
    }

    try {
        const order = await Orders.findById(id);
        if (!order) return res.status(404).json({ error: 'Order does not exist'});
        res.status(200).json(order);
    } catch(err) {
        res.status(400).json({error: "Error fetching order"})
    }
}

export const getUserOrder = async (req, res) => {

    try {
        const orders = await Orders.find({user: req.params.id});
        if (!orders) return res.status(404).json({ error: 'No orders Found'});
        res.status(200).json(orders);
    } catch(err) {
        res.status(400).json({error: "Error fetching orders"})
    }
}


export const createOrder = async (req, res) => {
    const newOrder = new Orders(req.body);

    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder);
    } catch(err) {
        res.status(400).json({error: "Error creating order"})
    }
}