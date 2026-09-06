import mongoose from "mongoose"

const transactionSchema = new mongoose.Schema({
    amount : {type: Number, required: true},
    description: {type: String, required: true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true},
    date: {type:Date, required:true, default: Date.now},
    source: {type: String, enum: ["manual", "receipt"], default: "manual"},
    receiptImage: {type : String},
    budget:  {type: mongoose.Schema.Types.ObjectId, ref: "Budget", required: true}
})

const Transaction = mongoose.model("Transaction", transactionSchema)

export default Transaction;