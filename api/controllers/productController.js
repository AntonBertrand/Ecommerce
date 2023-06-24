import express from 'express';
import Products from '../models/Products.js'
import mongoose, {mongo} from 'mongoose';

export const getAllProducts = async (req, res) => {
    try {
        const products = await Products.find({}).sort({createdAt: -1});
        res.status(200).json(products);
    } catch(err) {
        res.status(400).json({error: "Error gathering products!"})
    }
}

export const getProduct = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Product does not exist'});
    }
    
    try {
        const product = await Products.findById(id)
        if (!product) return res.status(404).json({ error: 'Product does not exist'});
        res.status(200).json({product})
    } catch(err) {
        res.status(400).json({error: "Error retrieving product!"})
    }
}

export const createProduct = async (req, res) => {
    const newProduct = new Products(req.body)

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}