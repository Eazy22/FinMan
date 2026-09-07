import { Router } from "express";

import { createTransaction, getTransactions } from "../controllers/transactionController.js"

const transactionRoutes = Router();

transactionRoutes.post("/", createTransaction)

transactionRoutes.get("/", getTransactions)

export default transactionRoutes;