import { TransactionModel } from "../models/local-file-system/transaction.js";
import {
    validatePartialTransaction,
    validateTransaction,
} from "../schemas/transactions.js";

export class TransactionController {
    static async getAll(req, res) {
        res.header("Access-Control-Allow-Origin", "http://localhost:8080");
        const { page, size } = req.query;
        const transactions = await TransactionModel.getAll({
            page,
            size,
        });

        res.json(transactions);
    }

    static async getById(req, res) {
        const { id } = req.params;
        const transaction = await TransactionModel.getById({ id });
        if (transaction) return res.json(transaction);

        res.status(404).json({ message: "Transaction not found" });
    }

    static async create(req, res) {
        const result = validateTransaction(req.body);

        if (!result.success) {
            return res
                .status(400)
                .json({ error: JSON.parse(result.error.message) });
        }

        const newTransaction = await TransactionModel.create({
            input: result.data,
        });
        res.status(201).json(newTransaction);
    }

    static async delete(req, res) {
        const { id } = req.params;

        const result = await TransactionModel.delete({ id });
        if (result === false)
            return res.status(404).json({ message: "Transaction not found" });
        return res.json({ message: "Transaction deleted" });
    }

    static async update(req, res) {
        const result = validatePartialTransaction(req.body);

        if (!result.success) {
            return res
                .status(400)
                .json({ error: JSON.parse(result.error.message) });
        }

        const { id } = req.params;

        const updatedTransaction = await TransactionModel.update({
            id,
            input: result.data,
        });
        if (updatedTransaction === false)
            return res.status(404).json({ message: "Transaction not found" });

        return res.json(updatedTransaction);
    }
}
