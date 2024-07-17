import z from "zod";

const TransactionCategorySchema = z.object({
    name: z.string({
        invalid_type_error: "Transactions Category's name must be a string",
        required_error: "Transactions  Category's name is required.",
    }),
    description: z.string({
        invalid_type_error:
            "Transaction's  Category description must be a string",
    }),
});

export const validateTransactionCategory = (object) => {
    return TransactionCategorySchema.safeParse(object);
};

export const validatePartialTransactionCategory = (object) => {
    return TransactionCategorySchema.partial().safeParse(object);
};
