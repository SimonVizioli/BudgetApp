import { randomUUID } from "node:crypto";
import { readJSON } from "../../util.js";
const transactionCategorys = readJSON("./transactionCategorys.json");

export class TransactionCategorysModel {
    static async getAll({ page, size }) {
        const tamaño = parseInt(size) ?? 10;
        const pagina = parseInt(page) ?? 0;
        let arrayResult = [];
        let db = transactionCategorys;

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
        const transactionCategory = transactionCategorys.find(
            (transactionCategory) => transactionCategory.id === id
        );
        return transactionCategory;
    }

    static async create({ input }) {
        const newTransactionCategory = {
            id: randomUUID(),
            ...input,
        };
        transactionCategorys.push(newTransactionCategory);
        return newTransactionCategory;
    }

    static async delete({ id }) {
        const transactionCategoryIndex = transactionCategorys.findIndex(
            (transactionCategory) => transactionCategory.id === id
        );

        if (transactionCategoryIndex === -1) return false;

        transactionCategorys.splice(transactionCategoryIndex, 1);
        return true;
    }

    static async update({ id, input }) {
        const transactionCategoryIndex = transactionCategorys.findIndex(
            (transactionCategory) => transactionCategory.id === id
        );
        if (transactionCategoryIndex === -1) return false;

        const updateTransactionCategory = {
            ...transactionCategorys[transactionCategoryIndex],
            ...input,
        };

        transactionCategorys[transactionCategoryIndex] =
            updateTransactionCategory;
        return updateTransactionCategory;
    }
}
