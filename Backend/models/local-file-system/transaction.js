import { randomUUID } from "node:crypto";
import { readJSON } from "../../util.js";
const transactions = readJSON("./transactions.json");

export class TransactionModel {
    static async getAll({ page, size }) {
        const tamaño = parseInt(size) ?? 10;
        const pagina = parseInt(page) ?? 0;
        let arrayResult = [];
        let db = transactions;

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
        const transaction = transactions.find(
            (transaction) => transaction.id === id
        );
        return transaction;
    }

    static async create({ input }) {
        const newTransaction = {
            id: randomUUID(),
            ...input,
        };
        transactions.push(newTransaction);
        return newTransaction;
    }

    static async delete({ id }) {
        const transactionIndex = transactions.findIndex(
            (transaction) => transaction.id === id
        );

        if (transactionIndex === -1) return false;

        transactions.splice(transactionIndex, 1);
        return true;
    }

    static async update({ id, input }) {
        const transactionIndex = transactions.findIndex(
            (transaction) => transaction.id === id
        );
        if (transactionIndex === -1) return false;

        const updateTransaction = {
            ...transactions[transactionIndex],
            ...input,
        };

        transactions[transactionIndex] = updateTransaction;
        return updateTransaction;
    }
}
