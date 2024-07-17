import { TransactionTypeModel } from "../models/local-file-system/transactionType.js";
import {
    validatePartialTransactionType,
    validateTransactionType,
} from "../schemas/transactionType.js";

export class TransactionTypeController {
    static async getAll(req, res) {
        res.header("Access-Control-Allow-Origin", "http://localhost:8080");
        const { page, size } = req.query;
        const transactionTypes = await TransactionTypeModel.getAll({
            page,
            size,
        });

        res.json(transactionTypes);
    }

    static async getById(req, res) {
        const { id } = req.params;
        const transactionType = await TransactionTypeModel.getById({ id });
        if (transactionType) return res.json(transactionType);

        res.status(404).json({ message: "Transaction Type not found" });
    }

    static async create(req, res) {
        const result = validateTransactionType(req.body);

        if (!result.success) {
            return res
                .status(400)
                .json({ error: JSON.parse(result.error.message) });
        }

        const newTransactionType = await TransactionTypeModel.create({
            input: result.data,
        });
        res.status(201).json(newTransactionType);
    }

    static async delete(req, res) {
        const { id } = req.params;

        const result = await TransactionTypeModel.delete({ id });
        if (result === false)
            return res
                .status(404)
                .json({ message: "Transaction Type not found" });
        return res.json({ message: "Transaction Type deleted" });
    }

    static async update(req, res) {
        const result = validatePartialTransactionType(req.body);

        if (!result.success) {
            return res
                .status(400)
                .json({ error: JSON.parse(result.error.message) });
        }

        const { id } = req.params;

        const updatedTransactionType = await TransactionTypeModel.update({
            id,
            input: result.data,
        });
        if (updatedTransactionType === false)
            return res
                .status(404)
                .json({ message: "Transaction Type not found" });

        return res.json(updatedTransactionType);
    }
}
