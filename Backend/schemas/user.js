import z from "zod";

const UserSchema = z.object({
    name: z.string({
        invalid_type_error: "User name must be a string",
        required_error: "User name is required.",
    }),
    lastname: z.string({
        invalid_type_error: "User lastname must be a string",
        required_error: "User lastname is required.",
    }),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    loginStatus: z.boolean().optional(),
    registerDate: z.string().optional(),
    verifyLogin: z.boolean().optional(),
});

export const validateUser = (object) => {
    return UserSchema.safeParse(object);
};

export const validatePartialUser = (object) => {
    return UserSchema.partial().safeParse(object);
};
