import { BudgetModel } from "../models/local-file-system/budget.js";
import { validateBudget, validatePartialBudget } from "../schemas/budget.js";

export class BudgetController {
    static async getAll(req, res) {
        res.header("Access-Control-Allow-Origin", "http://localhost:8080");
        const { page, size } = req.query;
        const budgets = await BudgetModel.getAll({
            page,
            size,
        });

        res.json(budgets);
    }

    static async getById(req, res) {
        const { id } = req.params;
        const budget = await BudgetModel.getById({ id });
        if (budget) return res.json(budget);

        res.status(404).json({ message: "Budget not found" });
    }

    static async create(req, res) {
        const result = validateBudget(req.body);

        if (!result.success) {
            return res
                .status(400)
                .json({ error: JSON.parse(result.error.message) });
        }

        const newBudget = await BudgetModel.create({
            input: result.data,
        });
        res.status(201).json(newBudget);
    }

    static async delete(req, res) {
        const { id } = req.params;

        const result = await BudgetModel.delete({ id });
        if (result === false)
            return res.status(404).json({ message: "Budget not found" });
        return res.json({ message: "Budget deleted" });
    }

    static async update(req, res) {
        const result = validatePartialBudget(req.body);

        if (!result.success) {
            return res
                .status(400)
                .json({ error: JSON.parse(result.error.message) });
        }

        const { id } = req.params;

        const updatedBudget = await BudgetModel.update({
            id,
            input: result.data,
        });
        if (updatedBudget === false)
            return res.status(404).json({ message: "Budget not found" });

        return res.json(updatedBudget);
    }
}
