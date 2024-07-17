import { Router } from "express";
import { TransactionCategoryController } from "../controllers/transactionCategory.js";
export const transactionCategoryRouter = Router();

transactionCategoryRouter.get("/", TransactionCategoryController.getAll);
transactionCategoryRouter.post("/", TransactionCategoryController.create);

transactionCategoryRouter.get("/:id", TransactionCategoryController.getById);
transactionCategoryRouter.patch("/:id", TransactionCategoryController.update);
transactionCategoryRouter.delete("/:id", TransactionCategoryController.delete);
