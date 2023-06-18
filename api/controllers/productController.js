import express from 'express';

import Products from '../models/Products.js'

export const getProducts = async (req, res) => {
    res.json({msg: "Getting all products!"});
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