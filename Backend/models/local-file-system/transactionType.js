import { randomUUID } from "node:crypto";
import { readJSON } from "../../util.js";
const transactionTypes = readJSON("./transactionTypes.json");

export class TransactionTypeModel {
    static async getAll({ page, size }) {
        const tamaño = parseInt(size) ?? 10;
        const pagina = parseInt(page) ?? 0;
        let arrayResult = [];
        let db = transactionTypes;

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
        const transactionType = transactionTypes.find(
            (transactionType) => transactionType.id === id
        );
        return transactionType;
    }

    static async create({ input }) {
        const newTransactionType = {
            id: randomUUID(),
            ...input,
        };
        transactionTypes.push(newTransactionType);
        return newTransactionType;
    }

    static async delete({ id }) {
        const transactionTypeIndex = transactionTypes.findIndex(
            (transactionType) => transactionType.id === id
        );

        if (transactionTypeIndex === -1) return false;

        transactionTypes.splice(transactionTypeIndex, 1);
        return true;
    }

    static async update({ id, input }) {
        const transactionTypeIndex = transactionTypes.findIndex(
            (transactionType) => transactionType.id === id
        );
        if (transactionTypeIndex === -1) return false;

        const updateTransactionType = {
            ...transactionTypes[transactionTypeIndex],
            ...input,
        };

        transactionTypes[transactionTypeIndex] = updateTransactionType;
        return updateTransactionType;
    }
}
