import { Router } from "express";
import { BudgetController } from "../controllers/budget.js";
export const budgetRouter = Router();

budgetRouter.get("/", BudgetController.getAll);
budgetRouter.post("/", BudgetController.create);

budgetRouter.get("/:id", BudgetController.getById);
budgetRouter.patch("/:id", BudgetController.update);
budgetRouter.delete("/:id", BudgetController.delete);
