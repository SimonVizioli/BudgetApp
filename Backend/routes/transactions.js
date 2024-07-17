import { Router } from "express";
import { TransactionController } from "../controllers/transaction.js";
export const transactionRouter = Router();

transactionRouter.get("/", TransactionController.getAll);
transactionRouter.post("/", TransactionController.create);

transactionRouter.get("/:id", TransactionController.getById);
transactionRouter.patch("/:id", TransactionController.update);
transactionRouter.delete("/:id", TransactionController.delete);
