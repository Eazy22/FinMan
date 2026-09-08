import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose";
import transactionRoutes from "./routes/transactionRoutes.js"
import budgetRoutes from "./routes/budgetRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js"

dotenv.config({path: ".env.local"})

const app = express();

const PORT = process.env.PORT

const MONGO_URI = process.env.MONGO_URI

app.use(express.json());
app.use(cors());
app.use("/api/transactions", transactionRoutes);
app.use("/api/budgets", budgetRoutes);
app.use("/api/categories", categoryRoutes);

mongoose.connect(MONGO_URI).then(() => {console.log("Database Active"); app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)} )}
).catch((err) => console.log(err))
