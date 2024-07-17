import express, { json } from "express";
import { corsMiddleware } from "./middlewares/cors.js";
import { budgetRouter } from "./routes/budgets.js";
import { userRouter } from "./routes/user.js";
import { transactionTypeRouter } from "./routes/transactionTypes.js";
import { transactionRouter } from "./routes/transactions.js";
import { transactionCategoryRouter } from "./routes/transactionCategorys.js";

const app = express();

app.use(json());
app.use(corsMiddleware());
app.disable("x-powered-by");

const PORT = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
    res.json({ message: "Main" });
});

app.use("/budget", budgetRouter);
app.use("/user", userRouter);
app.use("/transaction", transactionRouter);
app.use("/transactionType", transactionTypeRouter);
app.use("/transactionCategory", transactionCategoryRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});
