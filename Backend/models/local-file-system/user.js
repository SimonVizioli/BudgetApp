import { randomUUID } from "node:crypto";
import { readJSON } from "../../util.js";
const users = readJSON("./users.json");

export class UserModel {
    static async getAll({ page, size }) {
        const tamaño = parseInt(size) ?? 10;
        const pagina = parseInt(page) ?? 0;
        let arrayResult = [];
        let db = users;

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
        const user = users.find((user) => user.id === id);
        return user;
    }

    static async create({ input }) {
        const newUser = {
            id: randomUUID(),
            ...input,
        };
        users.push(newUser);
        return newUser;
    }

    static async delete({ id }) {
        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex === -1) return false;

        users.splice(userIndex, 1);
        return true;
    }

    static async update({ id, input }) {
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex === -1) return false;

        const updateUser = {
            ...users[userIndex],
            ...input,
        };

        users[userIndex] = updateUser;
        return updateUser;
    }
}
