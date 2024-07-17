import { TransactionCategorysModel } from "../models/local-file-system/transactionCategory.js";
import {
    validatePartialTransactionCategory,
    validateTransactionCategory,
} from "../schemas/transactionCategory.js";

export class TransactionCategoryController {
    static async getAll(req, res) {
        res.header("Access-Control-Allow-Origin", "http://localhost:8080");
        const { page, size } = req.query;
        const transactionCategorys = await TransactionCategorysModel.getAll({
            page,
            size,
        });

        res.json(transactionCategorys);
    }

    static async getById(req, res) {
        const { id } = req.params;
        const transactionCategory = await TransactionCategorysModel.getById({
            id,
        });
        if (transactionCategory) return res.json(transactionCategory);

        res.status(404).json({ message: "Transaction's Category not found" });
    }

    static async create(req, res) {
        const result = validateTransactionCategory(req.body);

        if (!result.success) {
            return res
                .status(400)
                .json({ error: JSON.parse(result.error.message) });
        }

        const newTransactionCategory = await TransactionCategorysModel.create({
            input: result.data,
        });
        res.status(201).json(newTransactionCategory);
    }

    static async delete(req, res) {
        const { id } = req.params;

        const result = await TransactionCategorysModel.delete({ id });
        if (result === false)
            return res
                .status(404)
                .json({ message: "Transaction's Category not found" });
        return res.json({ message: "Transaction's Category deleted" });
    }

    static async update(req, res) {
        const result = validatePartialTransactionCategory(req.body);

        if (!result.success) {
            return res
                .status(400)
                .json({ error: JSON.parse(result.error.message) });
        }

        const { id } = req.params;

        const updatedTransactionsCategory =
            await TransactionCategorysModel.update({
                id,
                input: result.data,
            });
        if (updatedTransactionsCategory === false)
            return res
                .status(404)
                .json({ message: "Transaction's Catergory not found" });

        return res.json(updatedTransactionsCategory);
    }
}
