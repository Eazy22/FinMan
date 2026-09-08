import mongoose from "mongoose"

const budgetSchema = new mongoose.Schema({
    month: {type: Number, required: true},
    year: {type: Number, required: true},
    totalIncome: {type: Number, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    categoryAllocations: [
        {
            category: {type: mongoose.Schema.Types.ObjectId, ref: "Category"},
            amount: {type: Number}
        }
    ]
}, {timestamps: true})

const Budget = mongoose.model("Budget", budgetSchema);

export default Budget;

