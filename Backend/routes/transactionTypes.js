import { Router } from "express";
import { TransactionTypeController } from "../controllers/transactionType.js";
export const transactionTypeRouter = Router();

transactionTypeRouter.get("/", TransactionTypeController.getAll);
transactionTypeRouter.post("/", TransactionTypeController.create);

transactionTypeRouter.get("/:id", TransactionTypeController.getById);
transactionTypeRouter.patch("/:id", TransactionTypeController.update);
transactionTypeRouter.delete("/:id", TransactionTypeController.delete);
