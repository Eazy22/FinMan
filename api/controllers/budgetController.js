import Budget from "../models/Budget.js";

export const createBudget = async(req, res) => {
    try {
        const {month, year, totalIncome, owner} = req.body;  
        const data = await Budget.create({month, year, totalIncome, owner})
        res.status(201).json({message: "Budget created!", Budget: data})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message : "Server Error, could not create budget"})  
    }
}

export const getBudgets = async(req, res) => {
    try {
        const data = await Budget.find({});
        res.status(200).json({Budgets: data})
    } catch (error) {
        res.status(500).json({message: "Server Error, could not fetch Budgets"})
    }
}