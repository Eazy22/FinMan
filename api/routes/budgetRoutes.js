import {createBudget, getBudgets} from "../controllers/budgetController.js"
import { Router } from "express";


const budgetRoutes = Router();

budgetRoutes.get("/", getBudgets);

budgetRoutes.post("/", createBudget);


export default budgetRoutes;