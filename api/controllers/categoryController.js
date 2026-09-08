import Category from "../models/Category.js";

export const createCategory = async (req,res) => {
    try {
        const {categoryName, budget}  = req.body;
        const data = await Category.create({categoryName, budget});
        res.status(201).json({ Category: data});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getCategories = async (req,res) => {
    try {
        const data = await Category.find({});
        res.status(200).json({Category: data})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

