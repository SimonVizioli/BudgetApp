import z from "zod";

const TransactionsSchema = z.object({
    name: z.string({
        invalid_type_error: "Transactions Type's name must be a string",
        required_error: "Transactions Type's name is required.",
    }),
    description: z.string({
        invalid_type_error: "Transactions Type's description must be a string",
        required_error: "Transactions Type's  description is required.",
    }),
    transactionType_id: z.number().min(1, "Transaction Type ID is required"),
    transactionCategory_id: z
        .number()
        .min(1, "Transaction Category ID is required"),
    user_id: z.number().min(1, "User ID is required"),
    amount: z.number().positive("Amount must be a positive number"),
    date: z.string().min(1, "Date is required"), // You might want to use a more specific date validation
    installment: z.number().optional(),
});

export const validateTransaction = (object) => {
    return TransactionsSchema.safeParse(object);
};

export const validatePartialTransaction = (object) => {
    return TransactionsSchema.partial().safeParse(object);
};
