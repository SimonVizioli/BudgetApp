import z from "zod";

const BudgetSchema = z.object({
    user_id: z.number().min(1, "User ID is required"),
    currentDate: z.string().min(1, "Current Date is required"), // You might want to use a more specific date validation
    totalExpenses: z
        .number()
        .nonnegative("Total Expenses must be a non-negative number"),
    totalIncome: z
        .number()
        .nonnegative("Total Income must be a non-negative number"),
    balance: z.number().nonnegative("Balance must be a non-negative number"),
});

export const validateBudget = (object) => {
    return BudgetSchema.safeParse(object);
};

export const validatePartialBudget = (object) => {
    return BudgetSchema.partial().safeParse(object);
};
