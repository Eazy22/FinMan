import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    categoryName: {type: String, required: true},
    budget: {type: mongoose.Schema.Types.ObjectId, ref: "Budget", required: true}
})

const Category = mongoose.model("Category", categorySchema)

export default Category;