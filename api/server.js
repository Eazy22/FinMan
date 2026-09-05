import express from "express";
import cors from "cors"
import "dotenv/config";
import mongoose from "mongoose";

const app = express();

const PORT = process.env.PORT;

const MONGO_URI = process.env.MONGODB_URI;

app.use(express.json())
app.use(cors())

mongoose.connect(MONGO_URI).then(() => {console.log("Database Active"); app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)} )}
).catch((err) => console.log(err))
