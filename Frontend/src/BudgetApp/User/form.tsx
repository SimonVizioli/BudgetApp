// src/components/Form.tsx
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../utils/Input";
import { User } from "@/utils/types";

const UserForm: React.FC = () => {
    const [formData, setFormData] = useState<User>({
        name: "",
        lastname: "",
        email: "",
        password: "",
        verifyPassword: "",
    });
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Maneja el envío del formulario
        await console.log(formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto my-24 shadow-lg rounded-xl p-6 bg-emerald-200"
        >
            <h2 className="text-xl font-medium text-black py-6">User</h2>
            <Input
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <Input
                label="Lastname"
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
            />
            <Input
                label="Email"
                type="string"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <Input
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <Input
                label="Repeat Password"
                type="password"
                name="verifyPassword"
                value={formData.verifyPassword}
                onChange={handleChange}
            />

            <div className="inline-flex">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                >
                    Back
                </button>
                <button
                    type="submit"
                    className="bg-green-400 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default UserForm;
