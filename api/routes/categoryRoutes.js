import { getCategories,createCategory } from "../controllers/categoryController.js";
import { Router } from "express";

const categoryRoutes = Router();

categoryRoutes.get("/", getCategories);

categoryRoutes.post("/", createCategory);

export default categoryRoutes;

