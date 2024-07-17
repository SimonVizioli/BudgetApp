import { randomUUID } from "node:crypto";
import { readJSON } from "../../util.js";
const budgets = readJSON("./budgets.json");

export class BudgetModel {
    static async getAll({ page, size }) {
        const tamaño = parseInt(size) ?? 10;
        const pagina = parseInt(page) ?? 0;
        let arrayResult = [];
        let db = budgets;

        if (pagina || pagina === 0) {
            for (
                let i = pagina * tamaño;
                i < (pagina + 1) * tamaño && i < db.length;
                i++
            ) {
                arrayResult.push(db[i]);
            }
            db = arrayResult;
        }

        return db;
    }

    static async getById({ id }) {
        const budget = budgets.find((budget) => budget.id === id);
        return budget;
    }

    static async create({ input }) {
        const newBudget = {
            id: randomUUID(),
            ...input,
        };
        budgets.push(newBudget);
        return newBudget;
    }

    static async delete({ id }) {
        const budgetIndex = budgets.findIndex((budget) => budget.id === id);

        if (budgetIndex === -1) return false;

        budgets.splice(budgetIndex, 1);
        return true;
    }

    static async update({ id, input }) {
        const budgetIndex = budgets.findIndex((budget) => budget.id === id);
        if (budgetIndex === -1) return false;

        const updateBudget = {
            ...budgets[budgetIndex],
            ...input,
        };

        budgets[budgetIndex] = updateBudget;
        return updateBudget;
    }
}
