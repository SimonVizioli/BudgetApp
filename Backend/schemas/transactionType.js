import z from "zod";

const TransactionsTypeSchema = z.object({
    name: z.string({
        invalid_type_error: "Transactions Type's name must be a string",
        required_error: "Transactions Type's name is required.",
    }),
    description: z.string({
        invalid_type_error: "Transactions Type's description must be a string",
        required_error: "Transactions Type's  description is required.",
    }),
});

export const validateTransactionType = (object) => {
    return TransactionsTypeSchema.safeParse(object);
};

export const validatePartialTransactionType = (object) => {
    return TransactionsTypeSchema.partial().safeParse(object);
};
